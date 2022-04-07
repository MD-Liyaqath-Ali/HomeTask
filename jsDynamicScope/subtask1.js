// https://www.codewars.com/kata/prefill-an-array
// For Problem Statement and Function call open the above link and proceed with --> Select JS as Language Then --> TRAIN

function prefill(length, value) {
  let lengthInt = parseInt(length);
  if(Number.isNaN(lengthInt) || length%1!==0 || lengthInt<0){
    throw new TypeError(length+" is invalid");
  }
  if(lengthInt==0)
    {
      return [];
    }
  return new Array(lengthInt).fill(value);
}