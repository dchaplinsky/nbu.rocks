#!/usr/bin/env python
import sys
import os
import re
import json
import os.path
import glob2
import tempfile
from collections import OrderedDict

usage = """\
usage: extract_to_json.py pdf_mask xlsx_stats output_dir

    pdf_mask - mask to find pdf files with info about licenses and perms
    xlsx_stats - path to xlsx file with stats about branches
    output_dir - path to dir to store extracted data in json files
"""


def slice_and_dice(text, sections):
    regex = '(' + ')|('.join(map(re.escape, sections)) + ')'
    return filter(None, map(str.strip, filter(None, re.split(regex, text))))


def get_sections_as_dict(text, sections):
    result = slice_and_dice(text, sections)

    res = {}
    prev_value = None

    for r in result:
        if r in sections:
            if prev_value is not None:
                res[prev_value] = ""
            prev_value = r
        else:
            res[prev_value] = r
            prev_value = None

    return res


def parse_numbered_list(lines):
    first_column_len = len(re.match("(\s*\w+\s*)", lines[0]).group(0))

    accum = []

    prev_code = None
    prev_desc = None

    for l in lines:
        code, desc = re.match("(\s*\w+\s*)(.*)$", l).groups()
        if len(code) > first_column_len:
            desc = code + desc
            code = ""

        code = code.strip()
        desc = desc.strip()

        if code:
            if prev_code:
                accum.append((prev_code, prev_desc))

            prev_code = code
            prev_desc = desc
        else:
            prev_desc += " " + desc

        if prev_code:
            accum.append((prev_code, prev_desc))

    return OrderedDict(accum)


def parse_main_license(license):
    license_lines = license.splitlines()
    license_data = get_sections_as_dict(
        "номер ліцензії {0}".format(license_lines[0]),
        ["номер ліцензії", "від", "номер бланка"])

    license_data["Перелік операцій ліцензії"] = parse_numbered_list(
        license_lines[2:])

    return license_data


def parse_permissions(permissions):
    permissions_lines = permissions.splitlines()

    permissions_data = get_sections_as_dict(
        "номер дозволу {0}".format(permissions_lines[0]),
        ["номер дозволу", "від"])

    permissions_data["Перелік операцій дозвола"] = parse_numbered_list(
        permissions_lines[2:])

    return permissions_data


def expand_licenses(entry):
    if "Банківська ліцензія" in entry:
        lic_type = "Банківська ліцензія"

    elif "Ліцензія санаційного банку" in entry:
        lic_type = "Ліцензія санаційного банку"
    else:
        return entry

    licenses = re.split("Дозвіл ", entry[lic_type])

    entry[lic_type] = parse_main_license(licenses[0])
    entry["Дозволи"] = list(map(parse_permissions, licenses[1:]))

    return entry


def convert_one(fname):
    output_file = tempfile.mktemp(prefix="yes_i_know_you_deprecated")

    """
    pdftotext - is installed poppler-utils package for PDF to text conversion;

    keys:
        -raw   Keep the text in content stream order;
        -nopgbrk  Don’t insert page breaks between  pages.
    """
    os.system('pdftotext -layout -nopgbrk "{0}" "{1}"'.format(
        fname, output_file))

    with open(output_file, 'r') as f:
        # converted text from pdf file
        text = f.read()

    os.unlink(output_file)

    entries = filter(str.strip, re.split(re.escape("Назва банку"), text))
    entry_sections = ["Назва банку", "Номер банку (МФО)", "Код ЄДРПОУ",
                      "Адреса", "Банківська ліцензія", "Дата відкликання",
                      "Підстави прийняття рішення",
                      "Ліцензія санаційного банку"]

    expanded_entries = []

    try:
        expanded_entries = list(map(
            lambda x: expand_licenses(get_sections_as_dict(
                "Назва банку {0}".format(x), entry_sections)),
            entries))
    except:
        print(fname)

    mfo, _ = os.path.splitext(os.path.basename(fname))

    return {
        "МФО": mfo,
        "Ліцензії": list(expanded_entries)
    }


def convert_many(mask, out_file):
    to_export = map(convert_one, glob2.glob(mask))

    with open(out_file, "w") as fp:
        json.dump(list(to_export), fp, ensure_ascii=False, indent=4)

if __name__ == "__main__":
    if len(sys.argv) < 3:
        sys.exit(usage)

    if len(sys.argv) > 2:
        convert_many(sys.argv[1], sys.argv[2])
