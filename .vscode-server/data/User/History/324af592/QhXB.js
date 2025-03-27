(function() {
  'use strict';

  var FILL_ME_IN = 'Fill this value in';

  describe('Part II --- LOGICAL', function() {

   
    describe('same', function() {

      it('are the parameters equal ', function() {
        //replace FILL_ME_IN with true or false
        expect(_.same(1,1)).to.equal(true);
        expect(_.same('string','string')).to.equal(true);
        expect(_.same(13,true)).to.equal(false);
        expect(_.same(false, undefined)).to.equal(false);
      });
    });

    describe('greater', function() {

      it('is the first parameter greater than the second', function() {
        //replace FILL_ME_IN with true or false
        expect(_.greater(1,1)).to.equal(false);
        expect(_.greater(37,12)).to.equal(true);
        expect(_.greater(167,167)).to.equal(false);
      });
    });

    describe('lessThan', function() {

      it('is the first parameter less than the second', function() {
        //replace FILL_ME_IN with true or false        
        expect(_.lessThan(1,1)).to.equal(false);
        expect(_.lessThan(37, 88)).to.equal(true);
        expect(_.lessThan(167,144)).to.equal(false);
      });
    });

    describe('Truthy or Falsy', function() {

      it('is the input Truthy or Falsy', function() {
        //replace FILL_ME_IN with true or false
        expect(_.falsyOrTruthy(0)).to.equal(false);
        expect(_.falsyOrTruthy(undefined)).to.equal(false);
        expect(_.falsyOrTruthy(1)).to.equal(true);
        expect(_.falsyOrTruthy(NaN)).to.equal(false);
        expect(_.falsyOrTruthy("")).to.equal(false);
      });
    }); 

    describe('And comparator', function() {

      it('should return true or false', function() {
        //replace FILL_ME_IN with true or false
        //The tests will compare the first two parameters resulting in true or false
        //It will also compare the last two for the same
        //Then finally it will compare the outcome of the previous tow comparisons using the logical and
        expect(_.andAnd(1,1,'string','string')).to.equal(true);
        //1 is equal to 1 resulting in true. 'string' is equal to 'string' resulting in true. If the first and the second are true then you will get true as a result.
        expect(_.andAnd(33,23,true,false)).to.equal(false);
        expect(_.andAnd(undefined,NaN,'learn','learn')).to.equal(false);
        expect(_.andAnd(false,"", 0, undefined )).to.equal(false);
      });
    }); 

    describe('Or comparator', function() {

      it('should return true or false', function() {
        //replace FILL_ME_IN with true or false
        //The tests will compare the first two parameters resulting in true or false
        //It will also compare the last two for the same
        //Then finally it will compare the outcome of the previous tow comparisons using the logical or
        expect(_.orOr(1,1,'string','string')).to.equal(true);
        //1 is equal to 1 resulting in true. 'string' is equal to 'string' resulting in true. If the first or the second is true then you will get true as a result.
        expect(_.orOr(33,23,true,false)).to.equal(false);
        expect(_.orOr(undefined,NaN,'learn','learn')).to.equal(true);
        expect(_.orOr(false,"", 0, undefined )).to.equal(false);
      });
      
    }); 

    describe('If Logic', function() {
      var band = "Queen"

      it("should return 'Great' if band and second parameter match", function() {
        
        expect(_.ifLogic(band, 'Queen')).to.equal('Great');
        expect(_.ifLogic(band, 'queen')).to.equal(undefined);
        expect(_.ifLogic(band, 'Metallica')).to.equal(undefined);
      });
      
    });

    describe('If Else Logic', function() {
      var movie = "John Wick"

      it("should return 'Great' if movie and second parameter match, 'Good' otherwise", function() {
        
        expect(_.ifElseLogic(movie, 'John Wick')).to.equal('Great');
        expect(_.ifElseLogic(movie, 'Happy Feet')).to.equal('Good');
        expect(_.ifElseLogic(movie, 'Air Bud')).to.equal('Good');
      });
      
    });

    describe('For Loops', function() {

      it("should return a single string", function() {
        
        expect(_.forLoop(['Coding ', 'is ', 'the ', 'best!'])).to.equal('Coding is the best!');
        expect(_.forLoop(['I ', 'got ', 'this!'])).to.equal('I got this!');
        expect(_.forLoop([1,2,3,4,5])).to.equal('12345');
      });
      
    });

    //Access the expected values in the below array. 
    //example expect(array[index].to.eql(value))
    //Ensure you replace FILL_ME_IN with the proper information
    //There is no function connected in funderbar.js
    describe('TEST ONLY: Array Values', function() { 
      let arry = [1,'Javascript',2,45,'Array',34,64,true];
      it("TEST ONLY: Access the Array's Values", function(){
        expect(arry[0]).to.eql(1);
        expect(arry[7]).to.eql(true);
        expect(arry[4]).to.eql('Array');
        expect(arry[1]).to.eql('Javascript');
        expect(arry[8]).to.eql(undefined);
      });

    });

    //Below is what is commonly known as an Array Matrix.
    //It is an array of arrays.
    //You will have to dig down to access the correct values.
    //Access the expected values in the below array. 
    //example expect(array[index].to.eql(value))
    //Ensure you replace FILL_ME_IN with the proper information
    //There is no function connected in funderbar.js
    describe('TEST ONLY: Array Matrix', function() { 
      let arryMtrx = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
      ];
      it('TEST ONLY: Access the Array\'s Values', function(){
        expect(arryMtrx[0][0]).to.eql(1);
        expect(arryMtrx[2][2]).to.eql(9);
        expect(arryMtrx[1][1]).to.eql(5);
        expect(arryMtrx[1][0]).to.eql(4);
        expect(arryMtrx[2][1]).to.eql(8);
        expect(arryMtrx[0][1]).to.eql(2);
      });

    });
    

    describe('Nested For Loops', function() {
      let testArray = [ 
        [0, 1], 
        [2, 3]
      ];

      let arryMtrx = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
      ];
      it("should return a sum of all numbers in the array matrix", function() {
        expect(_.nestedForLoop(testArray)).to.equal(6);
        expect(_.nestedForLoop(arryMtrx)).to.equal(45);
      });
      
    });

    describe('For If/Else Loops, Numbers', function() {

      it("Should return total of all numbers in the array.", function() {
        
        expect(_.forIfElseNum(['Coding ', 'is ', 'the ', 'best!'])).to.equal(4);
        expect(_.forIfElseNum(['I ',2, 'got ',3, 'this!'])).to.equal(8);
        expect(_.forIfElseNum([1,2,3,4,5])).to.equal(15);
      });
      
    });

    describe('For If/Else Loops, Strings', function() {

      it("Should return a sentence using the strings in the arrays.", function() {
        
        expect(_.forIfElseStr(['Coding ', 'is ', 'the ', 'best!'])).to.equal('Coding is the best!');
        expect(_.forIfElseStr(['I ',2, 'got ',3, 'this!'])).to.equal('I got this!');
        expect(_.forIfElseStr([1,2,3,4,5])).to.equal('');
      });
      
    });

    describe('For If/Else Loops Advanced', function() {

      it("Should return total of all numbers in the array or a Sentence depending on second parameter.", function() {
        
        expect(_.ifElseFor(['Coding ', 'is ', 'the ', 'best!'], 'string')).to.equal('Coding is the best!');
        expect(_.ifElseFor(['Coding ', 'is ', 'the ', 'best!'], 'number')).to.equal(4);
        expect(_.ifElseFor(['I ',2, 'got ',3, 'this!'], 'number')).to.equal(8);
        expect(_.ifElseFor(['I ',2, 'got ',3, 'this!'], 'string')).to.equal('I got this!');
        expect(_.ifElseFor([1,2,3,4,5], 'number')).to.equal(15);
        expect(_.ifElseFor([1,2,3,4,5], 'string')).to.equal('');
      });
      
    });
    //END OF PART II
  });

}());
