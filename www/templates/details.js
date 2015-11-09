(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["templates/details.nunj"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"row\">\n    ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "d")),"Структурні підрозділи по регіонах", env.opts.autoescape)) {
output += "\n    <div class=\"col-md-6\">\n        <h5>Філії по регіонах</h5>\n        <table class=\"table table-condensed\">\n            <tbody>\n                ";
frame = frame.push();
var t_3 = env.getFilter("batch").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "d")),"Структурні підрозділи по регіонах", env.opts.autoescape),2);
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("slc", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n                <tr>\n                    ";
frame = frame.push();
var t_7 = t_4;
if(t_7) {var t_6 = t_7.length;
for(var t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5];
frame.set("by_region", t_8);
frame.set("loop.index", t_5 + 1);
frame.set("loop.index0", t_5);
frame.set("loop.revindex", t_6 - t_5);
frame.set("loop.revindex0", t_6 - t_5 - 1);
frame.set("loop.first", t_5 === 0);
frame.set("loop.last", t_5 === t_6 - 1);
frame.set("loop.length", t_6);
output += "\n                        <th>";
output += runtime.suppressValue(runtime.memberLookup((t_8),"Регіон", env.opts.autoescape), env.opts.autoescape);
output += "</th>\n                        <td class=\"text-right\">";
output += runtime.suppressValue(runtime.memberLookup((t_8),"Кількість", env.opts.autoescape), env.opts.autoescape);
output += "</td>\n                    ";
;
}
}
frame = frame.pop();
output += "\n                </tr>\n                ";
;
}
}
frame = frame.pop();
output += "\n            </tbody>\n        </table>\n    </div>\n    ";
;
}
output += "\n    ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "d")),"Структурні підрозділи по датах", env.opts.autoescape)) {
output += "\n    <div class=\"col-md-3\">\n        <h5>Філії по роках</h5>\n        <table class=\"table table-condensed\">\n            <tbody>\n                ";
frame = frame.push();
var t_11 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "d")),"Структурні підрозділи по датах", env.opts.autoescape);
if(t_11) {var t_10 = t_11.length;
for(var t_9=0; t_9 < t_11.length; t_9++) {
var t_12 = t_11[t_9];
frame.set("by_date", t_12);
frame.set("loop.index", t_9 + 1);
frame.set("loop.index0", t_9);
frame.set("loop.revindex", t_10 - t_9);
frame.set("loop.revindex0", t_10 - t_9 - 1);
frame.set("loop.first", t_9 === 0);
frame.set("loop.last", t_9 === t_10 - 1);
frame.set("loop.length", t_10);
output += "\n                <tr>\n                    <th>";
output += runtime.suppressValue(runtime.memberLookup((t_12),"Дата", env.opts.autoescape), env.opts.autoescape);
output += "</th>\n                    <td class=\"text-right\">";
output += runtime.suppressValue(runtime.memberLookup((t_12),"Кількість", env.opts.autoescape), env.opts.autoescape);
output += "</td>\n                </tr>\n                ";
;
}
}
frame = frame.pop();
output += "\n            </tbody>\n        </table>\n    </div>\n    ";
;
}
output += "\n\n    ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "d")),"Структура власності", env.opts.autoescape)) {
output += "\n    <div class=\"col-md-3\">\n        <h5>Структура власності по роках</h5>\n        <table class=\"table table-condensed\">\n            <tbody>\n                ";
frame = frame.push();
var t_15 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "d")),"Структура власності", env.opts.autoescape);
if(t_15) {var t_14 = t_15.length;
for(var t_13=0; t_13 < t_15.length; t_13++) {
var t_16 = t_15[t_13];
frame.set("by_date", t_16);
frame.set("loop.index", t_13 + 1);
frame.set("loop.index0", t_13);
frame.set("loop.revindex", t_14 - t_13);
frame.set("loop.revindex0", t_14 - t_13 - 1);
frame.set("loop.first", t_13 === 0);
frame.set("loop.last", t_13 === t_14 - 1);
frame.set("loop.length", t_14);
output += "\n                <tr>\n                    <th>На ";
output += runtime.suppressValue(runtime.memberLookup((t_16),"Дата", env.opts.autoescape), env.opts.autoescape);
output += "</th>\n                    <td class=\"text-right\"><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_16),"Посилання", env.opts.autoescape), env.opts.autoescape);
output += "\" target=\"_blank\"><i class=\"glyphicon glyphicon-download-alt\" /></td>\n                </tr>\n                ";
;
}
}
frame = frame.pop();
output += "\n            </tbody>\n        </table>        \n    </div>\n    ";
;
}
output += "\n</div>\n\n";
frame = frame.push();
var t_19 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "d")),"Ліцензії", env.opts.autoescape);
if(t_19) {var t_18 = t_19.length;
for(var t_17=0; t_17 < t_19.length; t_17++) {
var t_20 = t_19[t_17];
frame.set("l", t_20);
frame.set("loop.index", t_17 + 1);
frame.set("loop.index0", t_17);
frame.set("loop.revindex", t_18 - t_17);
frame.set("loop.revindex0", t_18 - t_17 - 1);
frame.set("loop.first", t_17 === 0);
frame.set("loop.last", t_17 === t_18 - 1);
frame.set("loop.length", t_18);
output += "\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\"><h3 class=\"panel-title\">";
output += runtime.suppressValue(runtime.memberLookup((t_20),"Назва банку", env.opts.autoescape), env.opts.autoescape);
output += " (ЄДРПОУ: ";
output += runtime.suppressValue(runtime.memberLookup((t_20),"Код ЄДРПОУ", env.opts.autoescape), env.opts.autoescape);
output += ")</h3></div>\n        <div class=\"panel-body\">\n            <p><strong>Адреса: </strong> ";
output += runtime.suppressValue(runtime.memberLookup((t_20),"Адреса", env.opts.autoescape), env.opts.autoescape);
output += "</p>\n\n            ";
if(runtime.memberLookup((t_20),"Дата відкликання", env.opts.autoescape)) {
output += "\n                <p class=\"important\">\n                    <strong>Дата відкликання: </strong> ";
output += runtime.suppressValue(runtime.memberLookup((t_20),"Дата відкликання", env.opts.autoescape), env.opts.autoescape);
output += "\n                    <br/>\n                    ";
if(runtime.memberLookup((t_20),"Підстави прийняття рішення", env.opts.autoescape)) {
output += "\n                    <strong>Підстави прийняття рішення: </strong> ";
output += runtime.suppressValue(runtime.memberLookup((t_20),"Підстави прийняття рішення", env.opts.autoescape), env.opts.autoescape);
output += "\n                    ";
;
}
output += "\n                </p>\n            ";
;
}
output += "\n\n            ";
if(runtime.memberLookup((t_20),"Банківська ліцензія", env.opts.autoescape)) {
output += "\n                <p>\n                <strong>Банківська ліцензія: </strong> ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_20),"Банківська ліцензія", env.opts.autoescape)),"номер ліцензії", env.opts.autoescape), env.opts.autoescape);
output += ", від ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_20),"Банківська ліцензія", env.opts.autoescape)),"від", env.opts.autoescape), env.opts.autoescape);
output += ", номер бланка ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_20),"Банківська ліцензія", env.opts.autoescape)),"номер бланка", env.opts.autoescape), env.opts.autoescape);
output += " </p>\n\n                <strong>Перелік операцій ліцензії: </strong>\n                <table class=\"table\">\n                    <tbody>\n                        ";
frame = frame.push();
var t_23 = runtime.memberLookup((runtime.memberLookup((t_20),"Банківська ліцензія", env.opts.autoescape)),"Перелік операцій ліцензії", env.opts.autoescape);
if(t_23) {var t_21;
if(runtime.isArray(t_23)) {
var t_22 = t_23.length;
for(t_21=0; t_21 < t_23.length; t_21++) {
var t_24 = t_23[t_21][0]
frame.set("lic_no", t_23[t_21][0]);
var t_25 = t_23[t_21][1]
frame.set("lic_text", t_23[t_21][1]);
frame.set("loop.index", t_21 + 1);
frame.set("loop.index0", t_21);
frame.set("loop.revindex", t_22 - t_21);
frame.set("loop.revindex0", t_22 - t_21 - 1);
frame.set("loop.first", t_21 === 0);
frame.set("loop.last", t_21 === t_22 - 1);
frame.set("loop.length", t_22);
output += "\n                        <tr>\n                            <th class=\"narrow\">";
output += runtime.suppressValue(t_24, env.opts.autoescape);
output += "</th>\n                            <td>";
output += runtime.suppressValue(t_25, env.opts.autoescape);
output += "</td>\n                        </tr>\n                        ";
;
}
} else {
t_21 = -1;
var t_22 = runtime.keys(t_23).length;
for(var t_26 in t_23) {
t_21++;
var t_27 = t_23[t_26];
frame.set("lic_no", t_26);
frame.set("lic_text", t_27);
frame.set("loop.index", t_21 + 1);
frame.set("loop.index0", t_21);
frame.set("loop.revindex", t_22 - t_21);
frame.set("loop.revindex0", t_22 - t_21 - 1);
frame.set("loop.first", t_21 === 0);
frame.set("loop.last", t_21 === t_22 - 1);
frame.set("loop.length", t_22);
output += "\n                        <tr>\n                            <th class=\"narrow\">";
output += runtime.suppressValue(t_26, env.opts.autoescape);
output += "</th>\n                            <td>";
output += runtime.suppressValue(t_27, env.opts.autoescape);
output += "</td>\n                        </tr>\n                        ";
;
}
}
}
frame = frame.pop();
output += "\n                    </tbody>\n                </table>\n            ";
;
}
output += "\n\n            ";
if(runtime.memberLookup((t_20),"Ліцензія санаційного банку", env.opts.autoescape)) {
output += "\n                <p>\n                <strong>Ліцензія санаційного банку: </strong> ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_20),"Ліцензія санаційного банку", env.opts.autoescape)),"номер ліцензії", env.opts.autoescape), env.opts.autoescape);
output += ", від ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_20),"Ліцензія санаційного банку", env.opts.autoescape)),"від", env.opts.autoescape), env.opts.autoescape);
output += ", номер бланка ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_20),"Ліцензія санаційного банку", env.opts.autoescape)),"номер бланка", env.opts.autoescape), env.opts.autoescape);
output += " </p>\n\n                <strong>Перелік операцій ліцензії: </strong>\n                <table class=\"table\">\n                    <tbody>\n                        ";
frame = frame.push();
var t_30 = runtime.memberLookup((runtime.memberLookup((t_20),"Ліцензія санаційного банку", env.opts.autoescape)),"Перелік операцій ліцензії", env.opts.autoescape);
if(t_30) {var t_28;
if(runtime.isArray(t_30)) {
var t_29 = t_30.length;
for(t_28=0; t_28 < t_30.length; t_28++) {
var t_31 = t_30[t_28][0]
frame.set("lic_no", t_30[t_28][0]);
var t_32 = t_30[t_28][1]
frame.set("lic_text", t_30[t_28][1]);
frame.set("loop.index", t_28 + 1);
frame.set("loop.index0", t_28);
frame.set("loop.revindex", t_29 - t_28);
frame.set("loop.revindex0", t_29 - t_28 - 1);
frame.set("loop.first", t_28 === 0);
frame.set("loop.last", t_28 === t_29 - 1);
frame.set("loop.length", t_29);
output += "\n                        <tr>\n                            <th class=\"narrow\">";
output += runtime.suppressValue(t_31, env.opts.autoescape);
output += "</th>\n                            <td>";
output += runtime.suppressValue(t_32, env.opts.autoescape);
output += "</td>\n                        </tr>\n                        ";
;
}
} else {
t_28 = -1;
var t_29 = runtime.keys(t_30).length;
for(var t_33 in t_30) {
t_28++;
var t_34 = t_30[t_33];
frame.set("lic_no", t_33);
frame.set("lic_text", t_34);
frame.set("loop.index", t_28 + 1);
frame.set("loop.index0", t_28);
frame.set("loop.revindex", t_29 - t_28);
frame.set("loop.revindex0", t_29 - t_28 - 1);
frame.set("loop.first", t_28 === 0);
frame.set("loop.last", t_28 === t_29 - 1);
frame.set("loop.length", t_29);
output += "\n                        <tr>\n                            <th class=\"narrow\">";
output += runtime.suppressValue(t_33, env.opts.autoescape);
output += "</th>\n                            <td>";
output += runtime.suppressValue(t_34, env.opts.autoescape);
output += "</td>\n                        </tr>\n                        ";
;
}
}
}
frame = frame.pop();
output += "\n                    </tbody>\n                </table>\n            ";
;
}
output += "\n\n            ";
if(runtime.memberLookup((t_20),"Види діяльності та фінансові послуги, які здійснюються банком на підставі його повідомлення", env.opts.autoescape)) {
output += "\n                <p>\n                    <strong>Види діяльності та фінансові послуги, які здійснюються банком на підставі його повідомлення:</strong>\n                </p>\n                <table class=\"table\">\n                    <tbody>\n                        ";
frame = frame.push();
var t_37 = runtime.memberLookup((t_20),"Види діяльності та фінансові послуги, які здійснюються банком на підставі його повідомлення", env.opts.autoescape);
if(t_37) {var t_35;
if(runtime.isArray(t_37)) {
var t_36 = t_37.length;
for(t_35=0; t_35 < t_37.length; t_35++) {
var t_38 = t_37[t_35][0]
frame.set("notification_date", t_37[t_35][0]);
var t_39 = t_37[t_35][1]
frame.set("notification_text", t_37[t_35][1]);
frame.set("loop.index", t_35 + 1);
frame.set("loop.index0", t_35);
frame.set("loop.revindex", t_36 - t_35);
frame.set("loop.revindex0", t_36 - t_35 - 1);
frame.set("loop.first", t_35 === 0);
frame.set("loop.last", t_35 === t_36 - 1);
frame.set("loop.length", t_36);
output += "\n                        <tr>\n                            <th class=\"narrow\">";
output += runtime.suppressValue(t_38, env.opts.autoescape);
output += "</th>\n                            <td>";
output += runtime.suppressValue(t_39, env.opts.autoescape);
output += "</td>\n                        </tr>\n                        ";
;
}
} else {
t_35 = -1;
var t_36 = runtime.keys(t_37).length;
for(var t_40 in t_37) {
t_35++;
var t_41 = t_37[t_40];
frame.set("notification_date", t_40);
frame.set("notification_text", t_41);
frame.set("loop.index", t_35 + 1);
frame.set("loop.index0", t_35);
frame.set("loop.revindex", t_36 - t_35);
frame.set("loop.revindex0", t_36 - t_35 - 1);
frame.set("loop.first", t_35 === 0);
frame.set("loop.last", t_35 === t_36 - 1);
frame.set("loop.length", t_36);
output += "\n                        <tr>\n                            <th class=\"narrow\">";
output += runtime.suppressValue(t_40, env.opts.autoescape);
output += "</th>\n                            <td>";
output += runtime.suppressValue(t_41, env.opts.autoescape);
output += "</td>\n                        </tr>\n                        ";
;
}
}
}
frame = frame.pop();
output += "\n                    </tbody>\n                </table>\n            ";
;
}
output += "\n\n            ";
frame = frame.push();
var t_44 = runtime.memberLookup((t_20),"Дозволи", env.opts.autoescape);
if(t_44) {var t_43 = t_44.length;
for(var t_42=0; t_42 < t_44.length; t_42++) {
var t_45 = t_44[t_42];
frame.set("p", t_45);
frame.set("loop.index", t_42 + 1);
frame.set("loop.index0", t_42);
frame.set("loop.revindex", t_43 - t_42);
frame.set("loop.revindex0", t_43 - t_42 - 1);
frame.set("loop.first", t_42 === 0);
frame.set("loop.last", t_42 === t_43 - 1);
frame.set("loop.length", t_43);
output += "\n                <p>\n                <strong>Дозвіл: </strong> ";
output += runtime.suppressValue(runtime.memberLookup((t_45),"номер дозволу", env.opts.autoescape), env.opts.autoescape);
output += ", від ";
output += runtime.suppressValue(runtime.memberLookup((t_45),"від", env.opts.autoescape), env.opts.autoescape);
output += "</p>\n                <strong>Перелік операцій дозволу: </strong>\n                <table class=\"table\">\n                    <tbody>\n                        ";
frame = frame.push();
var t_48 = runtime.memberLookup((t_45),"Перелік операцій дозвола", env.opts.autoescape);
if(t_48) {var t_46;
if(runtime.isArray(t_48)) {
var t_47 = t_48.length;
for(t_46=0; t_46 < t_48.length; t_46++) {
var t_49 = t_48[t_46][0]
frame.set("perm_no", t_48[t_46][0]);
var t_50 = t_48[t_46][1]
frame.set("perm_text", t_48[t_46][1]);
frame.set("loop.index", t_46 + 1);
frame.set("loop.index0", t_46);
frame.set("loop.revindex", t_47 - t_46);
frame.set("loop.revindex0", t_47 - t_46 - 1);
frame.set("loop.first", t_46 === 0);
frame.set("loop.last", t_46 === t_47 - 1);
frame.set("loop.length", t_47);
output += "\n                        <tr>\n                            <th class=\"narrow\">";
output += runtime.suppressValue(t_49, env.opts.autoescape);
output += "</th>\n                            <td>";
output += runtime.suppressValue(t_50, env.opts.autoescape);
output += "</td>\n                        </tr>\n                        ";
;
}
} else {
t_46 = -1;
var t_47 = runtime.keys(t_48).length;
for(var t_51 in t_48) {
t_46++;
var t_52 = t_48[t_51];
frame.set("perm_no", t_51);
frame.set("perm_text", t_52);
frame.set("loop.index", t_46 + 1);
frame.set("loop.index0", t_46);
frame.set("loop.revindex", t_47 - t_46);
frame.set("loop.revindex0", t_47 - t_46 - 1);
frame.set("loop.first", t_46 === 0);
frame.set("loop.last", t_46 === t_47 - 1);
frame.set("loop.length", t_47);
output += "\n                        <tr>\n                            <th class=\"narrow\">";
output += runtime.suppressValue(t_51, env.opts.autoescape);
output += "</th>\n                            <td>";
output += runtime.suppressValue(t_52, env.opts.autoescape);
output += "</td>\n                        </tr>\n                        ";
;
}
}
}
frame = frame.pop();
output += "\n                    </tbody>\n                </table>\n            ";
;
}
}
frame = frame.pop();
output += "\n        </div>\n    </div>\n";
;
}
}
frame = frame.pop();
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();

