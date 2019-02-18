describe('main.js', function () {
    describe('calculate()', function () {
        it('validate expression when the first number is invalid', function () {
            spyOn(window, 'updateResult');
            calculate('a+3');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Operation not possible');
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        });

        it('validate expression when the second number is invalid', function () {
            spyOn(window, 'updateResult');
            calculate('3+a');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Operation not possible');
        });

        it('validate expression when the operation is invalid', function () {
            spyOn(window, 'updateResult');
            calculate('3_4');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Operation not possible');
        });

        it('calls add', function () {
            const spy = spyOn(Calculator.prototype, 'add');

            calculate('7+4');

            expect(spy).toHaveBeenCalledTimes(2);
            expect(spy).toHaveBeenCalledWith(7);
            expect(spy).toHaveBeenCalledWith(4);
        });

        it('calls subtract', function () {
            const spy = spyOn(Calculator.prototype, 'subtract');

            calculate('7-4');

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledTimes(1);
            expect(spy).toHaveBeenCalledWith(4);
        });

        it('calls multiply', function () {
            const spy = spyOn(Calculator.prototype, 'multiply');

            calculate('7*4');

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith(4);
        });

        it('calls divide', function () {
            const spy = spyOn(Calculator.prototype, 'divide');

            calculate('8/2');

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith(2);
        });

        describe('updateResult()', function () {
            beforeAll(function () {
                element = document.createElement('div');
                element.setAttribute('id', 'result');
                document.body.appendChild(element);
                this.element = element;
            });
            afterAll(function () {
                element = document.getElementById('result');
                document.body.removeChild(this.element);
            });
            it('update result to DOM element', function () {
                updateResult(5);
                expect(this.element.innerText).toBe('5');
            });
        });
    });
});