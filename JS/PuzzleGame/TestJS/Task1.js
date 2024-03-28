function getSum(number1, number2) {
    if(typeof(number1) == 'number' && typeof(number2) == 'number')
        return(number1+number2);
    return null;
};

function greeting (name, surname, age)  {
    console.log("Hello my name is "+name+" "+ surname+" and I'm "+age+" years old")
};

function isSquare(x) {
    if(typeof(x)== 'number'){
        let root = Math.sqrt(x);
        if(root * root == x) 
            return true;
        return false;
    }
    return false;
};


// let num1 = 9;

// let res = isSquare(8)
// console.log(res);

// let name = "Abdulla";
// let surname = "Oripov";
// let age = 50;

// let res = greeting(name,surname,age);
