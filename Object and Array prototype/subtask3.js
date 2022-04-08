// https://www.codewars.com/kata/function-cache
// For Problem Statement and Function call open the above link and proceed with --> Select JS as Language Then --> TRAIN

function cache(func) {
  const cachedResult = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if(!(key in cachedResult)){
      const result = func.apply(null, args);
      cachedResult[key] = result;
    }
    return cachedResult[key];
  }
}