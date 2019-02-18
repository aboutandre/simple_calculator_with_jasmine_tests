describe('main.js', function () {
    describe('calculate()', function () {
        xit('validate expression');
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