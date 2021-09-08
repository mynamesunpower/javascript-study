/*
Is variable visible?
중요도: 4
What will be the result of this code?

P.S. There’s a pitfall in this task. The solution is not obvious.
 */

let x = 1;

function func() {
    console.log(x); // ?

    let x = 2;
}

func();

/*
The result is: error.

Try running it:

let x = 1;

function func() {
  console.log(x); // ReferenceError: Cannot access 'x' before initialization
  let x = 2;
}

func();

In this example we can observe the peculiar difference between a “non-existing” and “uninitialized” variable.

As you may have read in the article 변수의 유효범위와 클로저, a variable starts in the “uninitialized” state from the moment when the execution enters a code block (or a function). And it stays uninitalized until the corresponding let statement.

In other words, a variable technically exists, but can’t be used before let.

The code above demonstrates it.

function func() {
  // the local variable x is known to the engine from the beginning of the function,
  // but "unitialized" (unusable) until let ("dead zone")
  // hence the error

  console.log(x); // ReferenceError: Cannot access 'x' before initialization

  let x = 2;
}
This zone of temporary unusability of a variable (from the beginning of the code block till let) is sometimes called the “dead zone”.
 */