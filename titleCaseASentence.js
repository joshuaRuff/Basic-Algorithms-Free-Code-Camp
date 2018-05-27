
function titleCase(str) {
//split string into an array
  var newArray = str.split(' ');
//iterate through the array
  for(var i = 0; i < newArray.length; i++) {
//create a placeholder variable for each word in the array  
    var placeHolder = newArray[i];
//Make first letter in word uppercase attached to a new var   
    var upper = placeHolder.charAt(0).toUpperCase();
//Slice the rest of the word off and make it lowercase
    placeHolder = placeHolder.slice(1).toLowerCase();
//Concatinate the first uppercase letter of the word with the lowercase rest
    newArray[i] = upper.concat(placeHolder);
  }
//Return the array after joining it back into a string
  return newArray.join(' ');
}

titleCase("I'm a little tea pot");
