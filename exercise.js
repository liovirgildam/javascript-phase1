const sayHello = require('./sayHello');

console.log(sayHello('Sarah'));

const add = require('./add');
const multiply = require('./multiply');

last = add(4,4);
result = multiply(2, last);


const getNumberSign = (number) => {
    if (number > 0)
        return 'positive';
    else if (number < 0)
        return 'negative';
    else 
        return 'zero';
}

const isValidLength = (phoneNumber) => {
    const validLength = 10;
    if (phoneNumber.length === validLength) {
      return true;
    } else {
      return false;
    }
  }

const fizzBuzz = (number) => {
    if (number % 3 === 0 & number % 5 === 0){
        return 'FizzBuzz';
    }else if (number % 3 === 0){
        return 'Fizz';
    }else if( number % 5 === 0){
        return 'Buzz';
    }else {
        return number;
    }
}

for(let i = 1; i <= 20; i ++){
    if(i % 2 === 0){
        console.log(`${i} is even`);
    }else{
        console.log(`${i} is odd`);
    }
}

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(8));
console.log(fizzBuzz(15));
console.log(fizzBuzz(18));
console.log(fizzBuzz(20));

console.log(getNumberSign(3));
console.log(getNumberSign(0));
console.log(getNumberSign(-1));
console.log(isValidLength('00'));
console.log(isValidLength('0011223344'));
console.log(result);