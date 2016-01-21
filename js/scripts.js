
var numberCheck = function(byNumber) {
  return !isNaN(byNumber);
};
var numberCompare = function(toNumber, byNumber) {
  if(numberCheck(toNumber) && numberCheck(byNumber)){
    return (toNumber >= byNumber);
  }
  else{
    return false;
  }
};
var numberDivisible = function(toNumber, byNumber) {
  if(numberCompare(toNumber, byNumber)){
    return Math.round((toNumber / byNumber));
  }
};
var numberArray = function(toNumber, byNumber) {
  var divisibleNumber = numberDivisible(toNumber, byNumber);
  var arrayNum = 0;
  var divisibleArray = [];
  for (var i = 0; i < divisibleNumber; i++){
    arrayNum = (arrayNum + byNumber);
    divisibleArray.push(arrayNum);
  };

  return divisibleArray;
};





//interface
// $(document).ready(function() {
//   $("form#triangle").submit(function(event) {
//     var countTo = parseInt($("input#countTo").val());
//     var countBy = parseInt($("input#countBy").val());
//
//     $("#result").show();
//     event.preventDefault();
//   });
// });
