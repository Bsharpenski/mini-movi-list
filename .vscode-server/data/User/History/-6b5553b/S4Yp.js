(function() {
  'use strict';

  var FILL_ME_IN = 'Fill this value in';


  describe('Part I --- VARIABLES', function() {

    describe('define', function() {

      it('should return whatever value is passed into it', function() {
        expect(_.define(1)).to.equal(1);
        expect(_.define(false)).to.be.false;
        expect(_.define('string')).to.equal('string');
      });
    });

    describe('dataType', function() {

      it('should return the data type of the value passed into it', function() {
        expect(_.dataType(1)).to.eql('number');
        expect(_.dataType(false)).to.eql('boolean');
        expect(_.dataType('Data Type')).to.equal('string');
        expect(_.dataType(undefined)).to.equal('undefined');
      });
    });

    describe('sum', function() {

      it('should return sum of the two numbers passed into it', function() {
        expect(_.sum(1,1)).to.eql(2);
        expect(_.sum(33, 150)).to.eql(183);
        expect(_.sum(10,-5)).to.eql(5);
      });
    });

    describe('subtract', function() {
      //For the tests ensure you are subtracting the second parameter from the first
      //_.subtract(a,b) === a - b
      it('should return difference of the two numbers passed into it', function() {
        expect(_.subtract(1,1)).to.eql(0);
        expect(_.subtract(222, 62)).to.eql(160);
        expect(_.subtract(10,-5)).to.eql(15);
      });
    });

    describe('multiply', function() {

      it('should return product of the two numbers passed into it', function() {
        expect(_.multiply(1,1)).to.eql(1);
        expect(_.multiply(11, 5)).to.eql(55);
        expect(_.multiply(10,-2)).to.eql(-20);
      });
    });

    describe('divide', function() {

      it('should return quotient of the two numbers passed into it', function() {
        expect(_.divide(1,1)).to.eql(1);
        expect(_.divide(144, 12)).to.eql(12);
        expect(_.divide(65,10)).to.eql(6.5);
      });
    });

    describe('remainderOperator', function() {

      it('should return remainderOperator of the two numbers passed into it', function() {
        expect(_.remainderOperator(1,1)).to.eql(0);
        expect(_.remainderOperator(37, 10)).to.eql(7);
        expect(_.remainderOperator(167, 12)).to.eql(11);
        expect(_.remainderOperator(99, 100)).to.eql(99);
        expect(_.remainderOperator(100, 100)).to.eql(0);
        expect(_.remainderOperator(101, 100)).to.eql(1);
        expect(_.remainderOperator(200, 100)).to.eql(0);
        expect(_.remainderOperator(201, 100)).to.eql(1);
      });
    });

    describe('increment', function() {

      it('should return the number passed in to it incremented by 1', function() {
        expect(_.increment(1)).to.eql(2);
        expect(_.increment(37)).to.eql(38);
        expect(_.increment(167)).to.eql(168);
      });
    });

    describe('decrement', function() {

      it('should return the the number passed in to it decremented by 1', function() {
        expect(_.decrement(1)).to.eql(0);
        expect(_.decrement(37)).to.eql(36);
        expect(_.decrement(167)).to.eql(166);
      });
    });


    //Precedence of Evaluation
    describe('mathematical order', function() {
      //Based on the test passed into _.mathOrder, determine the value of the output.
      //Feel free to use a calculator if necessary to solve the problem in the correct order. 
      it('determine the outcome based on the equation passed.', function() {
        var test1 = (a,b,c) => a + b * c;
        expect(_.mathOrder(test1(1,2,3))).to.eql(7);

        var test2 = (a,b,c) => a * b + c;
        expect(_.mathOrder(test2(1,2,3))).to.eql(5);

        var test3 = (a,b,c) => a / c * b + c;
        expect(_.mathOrder(test3(6,8,2))).to.eql(26);

        var test4 = (a,b,c) => a + c + b + b * a / b - c / b;
        expect(_.mathOrder(test4(10,2,6))).to.eql(25);
      });
    });

    //END OF PART I
  });

}());
