 describe('calculator.js', function () {
     let calculator;
     let calculator2;
     beforeEach(function() {
        calculator = new Calculator();
        calculator2 = new Calculator()
     })
     it('should add numbers to the total', function () {
         calculator.add(5);
         expect(calculator.total).toBe(5);
     });
     it('should subtract numbers from the total', function () {
         calculator.total = 10;
         calculator.subtract(5);
         expect(calculator.total).toBe(5);
     });
     it('should multiply the total by number', function () {
         calculator.total = 10;
         calculator.multiply(5);
         expect(calculator.total).toBe(50);
     });
     it('should divide total by number', function () {
         calculator.total = 10;
         calculator.divide(5);
         expect(calculator.total).toBe(2);
     });
     it('can be instantiated', function () {
         jasmine.addMatchers(customMatchers);

         expect(calculator).toBeCalculator();
         expect('foo').not.toBeCalculator();
         expect(calculator).toBeTruthy();
         expect(calculator.total).toBeFalsy();
         expect(calculator.constructor.name).toContain('alcu');
         expect(calculator2).toBeTruthy();
         expect(calculator2.total).toBeFalsy();
         expect(calculator).toEqual(calculator2);
     });
     it('instantiates an unique object', function () {
         expect(calculator).not.toBe(calculator2);
     });
     it('has common operations', function () {
         expect(calculator.add).toBeDefined();
         expect(calculator.subtract).toBeDefined();
         expect(calculator.multiply).toBeDefined();
         expect(calculator.divide).toBeDefined();
     });
     it('can overwrite total', function () {
         calculator.total = null;
         expect(calculator.total).toBeNull();
     });
     it('handles divide by zero', function () {
         expect(function () {
             calculator.divide(0)
         }).toThrowError(Error, 'Cannot divide by zero!');
     });
     it('returns total', function () {
         calculator.total = 50;
         expect(calculator.add(20)).toBe(70);
         expect(calculator.total).toMatch(/-?\d+/);
         expect(typeof calculator.total).toMatch('number');
     });
 })