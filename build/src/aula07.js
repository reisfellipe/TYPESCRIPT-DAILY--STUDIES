"use strict";
var weekdays;
(function (weekdays) {
    weekdays[weekdays["sunday"] = 1] = "sunday";
    weekdays[weekdays["monday"] = 2] = "monday";
    weekdays[weekdays["tuesday"] = 3] = "tuesday";
    weekdays[weekdays["wednesday"] = 4] = "wednesday";
    weekdays[weekdays["thursday"] = 5] = "thursday";
    weekdays[weekdays["friday"] = 6] = "friday";
    weekdays[weekdays["saturday"] = 7] = "saturday";
})(weekdays || (weekdays = {}));
console.log(weekdays.sunday);
console.log(weekdays[1]);
const d = new Date();
console.log(d.getDate());
var colors;
(function (colors) {
    colors["white"] = "#fff";
    colors["black"] = "#000";
    colors["red"] = "#f00";
    colors["green"] = "#0f0";
    colors["blue"] = "#00f";
})(colors || (colors = {}));
console.log(colors.white);
var userType;
(function (userType) {
    userType[userType["USER"] = 10] = "USER";
    userType[userType["ADMIN"] = 100] = "ADMIN";
    userType[userType["PLUS"] = 1000] = "PLUS";
})(userType || (userType = {}));
console.log(userType.PLUS);
const type = 10;
