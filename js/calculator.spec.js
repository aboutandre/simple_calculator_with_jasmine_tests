 describe('calculator.js', function () {
     it('should add numbers to the total', function () {
         const calculator = new Calculator();
         calculator.add(5);
         expect(calculator.total).toBe(5);
     });
     it('should subtract numbers from the total', function () {
         const calculator = new Calculator();
         calculator.total = 10;
         calculator.subtract(5);
         expect(calculator.total).toBe(5);
     });
     it('should multiply the total by number', function () {
         const calculator = new Calculator();
         calculator.total = 10;
         calculator.multiply(5);
         expect(calculator.total).toBe(50);

     });
     it('should divide total by number', function () {
         const calculator = new Calculator();
         calculator.total = 10;
         calculator.divide(5);
         expect(calculator.total).toBe(2);
     });
     it('should have a constructor', function () {
         const calculator = new Calculator();
         const calculator2 = new Calculator();
         expect(calculator).toEqual(calculator2);
     })
 })