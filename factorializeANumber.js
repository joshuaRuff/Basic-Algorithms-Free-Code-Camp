function factorialize(num) {
// create a variable that represents original number
  var x = num; 
//Create condition in case num = 0  
  if(num === 0) {
    return 1;
  }
  
  else {
//loop through the numbers less that num and multiple them adding them to the total.     
  for(var i = 1; i < x; i++) {
    num *= i;
  }
  return num;
  }
}

factorialize(5);
