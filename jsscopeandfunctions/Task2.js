// https://www.codewars.com/kata/get-the-middle-character
// For Problem Statement and Function call open the above link and proceed with --> Select JS as Language Then --> TRAIN

function getMiddle(inputString)
{
  let stringLength = inputString.length;
  return inputString.substr(Math.ceil(stringLength/2-1), stringLength%2==0 ? 2 : 1);
}