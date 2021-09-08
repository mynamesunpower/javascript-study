/*
Does a function pickup latest changes?
중요도: 5
The function sayHi uses an external variable name. When the function runs, which value is it going to use?

let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

sayHi(); // what will it show: "John" or "Pete"?
Such situations are common both in browser and server-side development. A function may be scheduled to execute later than it is created, for instance after a user action or a network request.

So, the question is: does it pick up the latest changes?
 */
let name = 'John';

function sayHi() {
    console.log('Hi, ' + name);
}

name = 'Pete';
sayHi();

/*
The answer is: Pete.

A function gets outer variables as they are now, it uses the most recent values.
Old variable values are not saved anywhere. When a function wants a variable, it takes the current value from its own Lexical Environment or the outer one.
 */