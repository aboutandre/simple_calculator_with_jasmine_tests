describe('main.js', function () {
    describe('calculate()', function () {
        it('validate expression when the first number is invalid', function () {
            spyOn(window, 'updateResult');
            calculate('a+3');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Operation not possible');
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