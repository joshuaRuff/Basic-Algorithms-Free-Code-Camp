function repeatStringNumTimes(str, num) {
//create a new array to push to
 var newArray = [];

//use the num argument with a loop to determine how many repeats
  for(var i = 0; i < num; i++) {
//push the repeats to the new array
    newArray.push(str);
  }
//join the array into a string and return it
  return newArray.join('');
}

repeatStringNumTimes("abc", 3); function repeatStringNumTimes(
