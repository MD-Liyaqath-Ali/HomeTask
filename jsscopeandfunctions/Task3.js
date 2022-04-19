// https://www.codewars.com/kata/partition-on
// For Problem Statement and Function call open the above link and proceed with --> Select JS as Language Then --> TRAIN

function partitionOn(pred, items) {
   let x = items.filter(function(a){ 
     return !pred(a); 
   } ); 
  let b = items.filter(pred); 
  items.length = 0; 
  for(let i = 0; i < x.length; i++) { 
     items.push(x[i]); 
  } 
  for(let i = 0; i < b.length; i++) { 
     items.push(b[i]); 
  }
  return x.length;
}