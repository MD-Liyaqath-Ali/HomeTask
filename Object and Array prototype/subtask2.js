// https://www.codewars.com/kata/a-chain-adding-function
// For Problem Statement and Function call open the above link and proceed with --> Select JS as Language Then --> TRAIN

function add(n){
  var sum = function(n2){
    return add(n+n2);
  }
  sum.valueOf = function(){
    return n;
  }
  return sum;
}