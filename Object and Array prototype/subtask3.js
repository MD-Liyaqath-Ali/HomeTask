// https://www.codewars.com/kata/function-cache
// For Problem Statement and Function call open the above link and proceed with --> Select JS as Language Then --> TRAIN


const _ = require('lodash');
const cache = func => _.memoize(func, JSON.stringify);