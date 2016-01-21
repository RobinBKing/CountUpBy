var numberToCheck = function(toNumber) {
  return numberCheck(toNumber);
};
var numberByCheck = function(numberInput) {
  return numberCheck(numberInput);
};
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
var numberDiv = function(toNumber, byNumber) {
  if(numberCompare(toNumber, byNumber)){
    return Math.round((toNumber / byNumber));
  }
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
