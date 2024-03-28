/**
 *
 * @param number1: {Number}
 * @param nunber2: {Number}
 * @returns {Number}
 */
module.exports.getSum = function getSum(number1, number2) {
    if(typeof(number1) == 'number' && typeof(number2) == 'number'){
        let sum =   number1 + number2;
        return parseFloat(sum.toFixed(1));
    }
    return null;
};

/**
 *
 * @param name: {String}
 * @param surname: {String}
 * @param age: {Number}
 * @returns {String}
 */
 module.exports.greeting = function greeting (name, surname, age)  {
    return("Hello, my name is "+name+" "+ surname+" and I am "+age+" years old.")
};

/**
 *
 * @param x: {Number}
 * @returns {Boolean}
 */
module.exports.isSquare = function isSquare(x) {
    if(typeof(x)== 'number'){
        let root = Math.sqrt(x);
        if(root * root == x) 
            return true;
        return false;
    }
    return false;
};


