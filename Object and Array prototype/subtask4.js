// https://www.codewars.com/kata/function-composition
// For Problem Statement and Function call open the above link and proceed with --> Select JS as Language Then --> TRAIN

function compose(f,g) {
  return function(x){
    if(arguments.length>1) return f.call(null,g.apply(null,arguments));
    else return f(g(x));
  }
}