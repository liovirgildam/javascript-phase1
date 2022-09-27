const person = {
    name: 'Maxine',
    age: 32,
    address: {
      city: 'London',
      postcode: 'E1 123'
    },
    hobbies: ['writing', 'tennis', 'cooking']
};

console.log(person.address.city);
console.log(person.hobbies[1]);

const cohort = {
    name : 'August2022',
    id: 1234,
    students: ['Thomas','Lili','Leroy', 'Rita', 'Guille', 'D', 'Jean']
};

const display = (cohortInfo) => {
    return `<${cohortInfo.id}> - <${cohortInfo.name}> - <${cohortInfo.students.length}> students in this cohort.`;
};

console.log(display(cohort));