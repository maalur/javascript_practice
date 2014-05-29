/*

  Source:  Codewars
  Difficulty:  5 kyu
  Title:  Calculating with Functions

  Description:
    This time we want to write calculations using functions and get the results.

		Requirements:
			- There must be a function for each number from 0 ("zero") to 9 ("nine")
			- There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
			- Each calculation consist of exactly one operation and two numbers
			- The most outer function represents the left operand, the most inner function represents the right operand

  Examples:
    seven(times(five())) # must return 35
		four(plus(nine())) # must return 13
		eight(minus(three())) # must return 5
		six(divided_by(two())) # must return 3

*/



['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
.forEach( function(name, n) {
    this[name] = function(op) { return op ? op(n) : n; };
});

function plus(b)			{ return function(a) { return a + b; }; }
function minus(b) 		{ return function(a) { return a - b; }; }
function times(b) 		{ return function(a) { return a * b; }; }
function dividedBy(b) { return function(a) { return a / b; }; }
