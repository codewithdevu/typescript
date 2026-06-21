"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var studentData = "Anil";
studentData = 9999;
studentData = [];
function fruitsData() {
    var item = 1;
    if (item > 1) {
        return ['apple', 'banana'];
    }
    else {
        return "Apple";
    }
}
console.log(fruitsData());
function studentInfo(name) {
    if (typeof name == 'string') {
        return "student name is " + name;
    }
    if (typeof name == 'number') {
        return "student age is " + name;
    }
}
studentInfo('anil sidhu');
studentInfo(999);
