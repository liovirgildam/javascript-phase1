names = ['Lia', 'Tatiana', 'Alda'];
console.log(names[1]);
more_names = names.concat('Luisa');
console.log(more_names);


numbers = [1,2,3,4,5,6,7,8,9,10];

sum = 0;

numbers.forEach(element => {
    sum += element;
});

console.log(sum);

const addToBatch = (array, number) => {
    if(array.length < 5){
        new_array = array.concat(number);
        return new_array;
    }else{
        return array;
    }
    
}

console.log(addToBatch([1], 3));
console.log(addToBatch([1, 2, 3], 4));
console.log(addToBatch([], 8));
console.log(addToBatch([1, 2, 3, 4, 5, 6], 7));
console.log(addToBatch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));

phoneNumbers = [   
    1763687364,
    4763687363,
    7867867862,
    'AAAA#####AAAA#87@768767382672', 
    4763687363,
    4763687363
]

const isValidNumber = (number) =>{
    return !isNaN(number);
};

const validPhones = phoneNumbers.filter(isValidNumber);
console.log(validPhones);

const checkLength = (number) => {
    return number.length <= 10;
};

const filterLongNumbers = (array_num) => {
    return array_num.filter(checkLength);
}

const numeros = [
    '1763687364',
    '4763687363',
    '7867867862',
    'aaaaaaaabbbbbbbcccccdddddddd' 
  ];
  

console.log(filterLongNumbers(numeros));
console.log(filterLongNumbers(['4763687363', '7867867862']));
console.log(filterLongNumbers([]));


const multiplyByTwo = (numbers) => {
    return numbers.map(num => num * 2 );
};
const nomes = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];


console.log(multiplyByTwo([1,2,3,4,5,6]));

// An array of objects!
const namesAndDiscounts = [
    { name: 'Anna', discount: 50 },
    { name: 'Laura', discount: 40 },
    { name: 'Josh', discount: 30 },
    { name: 'Min', discount: 50 },
    { name: 'Karla', discount: 60 }
  ];

  const generateMessages = (array) => {
    return array.map( user => 
        `Hi ${user.name}! ${user.discount}% off our best candies for you today`
    );
}

console.log(generateMessages(namesAndDiscounts));