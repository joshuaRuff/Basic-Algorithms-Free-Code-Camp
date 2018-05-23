function palindrome(str) {
//make every inputed str lowercase
  str = str.toLowerCase();

//remove these characters from the inputer string
  for(var i = 0; i < str.length; i++) {
    str = str.replace(',','');
    str = str.replace('.','');
    str = str.replace('-','');
    str = str.replace('_','');
    str = str.replace('(','');
    str = str.replace(')','');
    str = str.replace(' ','');
 
  }
 //create a variable to compare to user input - str reverses
  var newString = str.split('').reverse().join('');

//compare str to newString if they match return true, if not, false
  if(newString == str) {
   return true;
  }
  else {
   return false;
  }
}


//palindrome checker
palindrome("eye");
