function confirmEnding(str, target) {
//Check to see if the end of the str matches the target
  var myVar = str.length - (target.length);
  if(str.substr(myVar, str.length) == target) {
    return true;
  }
  return false;
}

confirmEnding("Bastian", "n");
