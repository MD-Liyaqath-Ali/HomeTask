// https://www.codewars.com/kata/extract-nested-object-reference
// For Problem Statement and Function call open the above link and proceed with --> Select JS as Language Then --> TRAIN

Object.prototype.hash = function(string) {
  try{ 
    return eval(`this.${string}`);
    }
  catch(Exception){ 
    return undefined;
    }
}