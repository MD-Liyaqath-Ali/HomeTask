// https://www.codewars.com/kata/closures-and-scopes/train/javascript
// For Problem Statement and Function call open the above link and proceed with --> Select JS as Language Then --> TRAIN

function createFunctions(n) {
  var callbacks = [];

  for (let i=0; i<n; i++) {
    callbacks.push(function() {
      return i;
    });
  }
  
  return callbacks;
}