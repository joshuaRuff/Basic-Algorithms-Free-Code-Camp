function largestOfFour(arr) {
//create new array
  var largeNumArray = [];
//iterate through array elements in the first array  
  for(var i = 0; i < arr.length; i++) {
    var largestNum = 0;
//iterate through array elements in the second arrays
    for(var j = 0; j < arr.length; j++){
//compare current largestNum with next element if it is larger replace it
      if(largestNum < arr[i][j]) {
        largestNum = arr[i][j];
      }
      
    }
//push largestNum in each secondary array to the new array    
    largeNumArray.push(largestNum);
  }
//retrun our array of largest numbers taken from the secondary arrays
  return largeNumArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
