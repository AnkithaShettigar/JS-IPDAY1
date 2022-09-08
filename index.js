//1.Difference between “ == “ and “ === “ operators.
//comparision operator
// == 

//examples
console.log("== operator");
console.log(1 == 1);
// expected output: true

console.log('hello' == 'helo');
// expected output: true

console.log('1' ==  1);
// expected output: true

console.log(0 == false);
// expected output: true

console.log("-------------------------------------------------");
//===

//examples
console.log("=== operator");

console.log(1 === 1);
// expected output: true

console.log('hello' === 'hello');
// expected output: true

console.log('1' ===  1);
// expected output: false

console.log(0 === false);
// expected output: false
console.log("-------------------------------------------------");

//2 What is the spread operator?

console.log("spread operator");
let arr = ['I','am','Ankitha'];
console.log(...arr);

console.log("-----------------------------------------------------");

//4.What are the differences between var, let and const?
console.log("var");
var x = 1;

if (x === 1) {
  var x = 2;

  console.log(x);
  // expected output: 2
}

console.log(x);
// expected output: 2

console.log("-----------------------------------------------------");

console.log("let");
let y = 1;

if (y === 1) {
  let y = 2;

  console.log(y);
  // expected output: 2
}

console.log(y);
//

console.log("---------------------------------------------------------");

console.log("const");
const number = 42;

try {
  number = 99;
} catch (err) {
  console.log(err);
  // expected output: TypeError: invalid assignment to const `number'
  // Note - error messages will vary depending on browser
}

console.log(number);
// expected output: 42
console.log("---------------------------------------------------------");

//5. What is execution context?
//6.What is creation phase and execution phase?

console.log("execution context ,creation phase and execution phase");
// var n = 3;
// function cube(num){
//     var answer = num*num*num;
//     return answer;
// }
// var cube1 = cube(n);
console.log("---------------------------------------------------------");

//8.What are closures? Give an example of closure
console.log("closure");
const ticketBooking = function(){
    let passengerCount0 = 0;
    let passengerCount1 = 0;
    return function(){
        passengerCount0++;
        passengerCount1++;
        console.log(`The count of the passsenger are ${passengerCount0}  ${passengerCount1}`);
    }
}
const bookie = ticketBooking();

console.log(bookie);//fn dfn
console.dir(bookie);
bookie();//The count of the passenger are 1 1
bookie();//The count of the passenger are 2 2
bookie();//The count of the passenger are 3 3
console.log("---------------------------------------------------------");
