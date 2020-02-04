// /* Author: Aniket*/

var enterNumber = document.querySelector('.form-group input');
document.querySelector('#Submit').addEventListener('click',mobileDigits);
function mobileDigits() {
  debugger;
  var mobDigits = {
    0 : " ",
    1 : " ",
    2 : ["a","b","c"], 
    3 : ["d","e","f"],
    4 : ["g","h","i"],
    5 : ["j","k","l"],
    6 : ["m","n","o"],
    7 : ["p","q","r","s"], 
    8 : ["t","u","v"],
    9 : ["w","x","y","z"]
  }
  var matchFound = [''];
  for (var i = 0; i < enterNumber.value.length; i++) {
      var digit = enterNumber.value[i];
      var letters = mobDigits[digit];
      var storeDigit = [];

      for (var j = 0; j < letters.length; j++) {
        var letterToAdd = letters[j];

        for (var k = 0; k < matchFound.length; k++) {
            var combination = matchFound[k];
            storeDigit.push(combination + letterToAdd);
        }
    }
    matchFound = storeDigit;
  }
  document.querySelector('footer p:nth-child(2)').innerHTML = matchFound;
}