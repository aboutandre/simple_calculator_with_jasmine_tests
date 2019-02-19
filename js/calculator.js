function Calculator() {
    this.total = 0;
}

Calculator.prototype.add = function (number) {
    return this.total += number;
};
Calculator.prototype.subtract = function (number) {
    return this.total -= number;
};
Calculator.prototype.multiply = function (number) {
    return this.total *= number;
};
Calculator.prototype.divide = function (number) {
    if (number === 0) {
        throw new Error('Cannot divide by zero!');
    }
    return this.total /= number;
};

Object.defineProperty(Calculator.prototype, 'version', {
    get: function () {
        return fetch('https://gist.githubusercontent.com/aboutandre/c000989b9d658f8467e898dfa0f933fd/raw/8103026ca1547b85d4eea97dbde0f8dac83ca7b9/simple-calculator.json')
            .then(function (result) {
                return result.json();
            })
            .then(function (json) {
                console.log('This is the version', json.version);
                return json.version;
            });
    },
    enumerable: true,
    configurable: true
});