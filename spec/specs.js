describe('countTo', function() {
   it("is true if countTo is a number", function(){
     expect(numberToCheck(50)).to.equal(true);
   });
   it("is false if countTo is not a number", function(){
     expect(numberToCheck("this")).to.equal(false);
   });
   it("is true if countBy is a number", function(){
     expect(numberByCheck(7)).to.equal(true);
   });
   it("is true if countTo is greater than or equal to countBy number", function(){
     expect(numberCompare(45, 8)).to.equal(true);
   });
   it("is false if countTo is less than or equal to countBy number", function(){
     expect(numberCompare(8, 45)).to.equal(false);
   });
   it("is false if countTo and countBy are not numbers", function(){
     expect(numberCompare("this", "that")).to.equal(false);
   });
   it("returns integer of countTo divided by countBy", function() {
     expect(numberDiv(22, 5)).to.equal(4);
   });

});
