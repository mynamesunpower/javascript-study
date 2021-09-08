/*
TODO 추후 PR 번역작업 기여해야 함!

Which variables are available?
중요도: 5
The function makeWorker below makes another function and returns it. That new function can be called from somewhere else.

Will it have access to the outer variables from its creation place, or the invocation place, or both?

function makeWorker() {
  let name = "Pete";

  return function() {
    alert(name);
  };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work(); // what will it show?
Which value it will show? “Pete” or “John”?
 */
function makeWorker() {
    let name = 'Pete';

    return function() {
        console.log(name);
    };
}

let name = 'John';

// create a function
let work = makeWorker();

// call it
work();

/*
The answer is: Pete.

The work() function in the code below gets name from the place of its origin through the outer lexical environment reference:


So, the result is "Pete" here.

But if there were no let name in makeWorker(), then the search would go outside and take the global variable as we can see from the chain above. In that case the result would be "John".
 */