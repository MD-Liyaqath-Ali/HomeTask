// https://www.codewars.com/kata/function-composition-1
// For Problem Statement and Function call open the above link and proceed with --> Select JS as Language Then --> TRAIN

const compose = (...functions) => arg => functions.reduceRight((result, func) => func(result), arg);