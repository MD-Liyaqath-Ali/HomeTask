// https://www.codewars.com/kata/transportation-on-vacation

function rentalCarCost(days) {
  let costPerDay = 40;
  let totalCost = costPerDay * days;
  if(days>=7)
    return (totalCost-50);
  else if(days>=3)
    return (totalCost-20);
  else
    return totalCost;
}
