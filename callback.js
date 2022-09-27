// const printHello = () => {
//     return 'Hello';
// }

// setTimeout(printHello, 2000);

// Called using an Anonymous function
// setTimeout(() => {
//     console.log(printHello());
// }, 2000);

const printHelloo = () => {
    console.log('Hello');
}

const executeAfterDelay = (seconds, transformFunction) => {
    return setTimeout(transformFunction,  seconds * 1000);
}

executeAfterDelay( 5, printHelloo );

