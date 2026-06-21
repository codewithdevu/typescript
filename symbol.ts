var sym= Symbol();
var sym2= Symbol();

var sym3=Symbol('abc');
var sym4=Symbol('abc');


// console.log(sym==sym2);
// console.log(sym3);
// console.log(sym4);

// console.log(sym3==sym4)

const dId= Symbol('id');
const mId= Symbol('id');


const obj= {
    [dId]:100,
    name:'anil sidhu'
}
console.log(obj[dId]);