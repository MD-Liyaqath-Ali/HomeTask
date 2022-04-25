// https://www.codewars.com/kata/array-helpers
// For Problem Statement and Function call open the above link and proceed with --> Select JS as Language Then --> TRAIN

Array.prototype.square=function(){
return this.map(number=>number*number)
}
Array.prototype.cube=function(){
return this.map(number=>number*number*number)
}
Array.prototype.average=function(){
return this.reduce((number1,number2)=>number1+number2,0)/this.length
}
Array.prototype.sum=function(){
return this.reduce((number1,number2)=>number1+number2,0)
}
Array.prototype.even=function(){
return this.filter(number=>number%2==0)
}
Array.prototype.odd=function(){
return this.filter(number=>number%2!==0)
}