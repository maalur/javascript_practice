/*

  Source:  Codewars
  Difficulty:  4 kyu
  Title:  Sum Strings as Numbers

  Description:
    Given the string representations of two integers,
    return the string representation of the sum of those integers.

    A string representation of an integer will contain
    no characters besides the ten numerals "0" to "9".

  Example:
    sumStrings('712569312664357328695151392', '8100824045303269669937')  =>  '712577413488402631964821329'

*/




function sumStrings(a,b) {
  var a = a.split('');
  var b = b.split('');
  var solution = [];
  var remainder = false;
  
  while (a.length || b.length || remainder) {
      sum = remainder + ~~a.pop() + ~~b.pop();
      solution.push( sum % 10 );
      remainder = sum > 9;
  }
  
  return solution.reverse().join('').replace(/^0/, '');
}