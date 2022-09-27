const fizzbuzzUntil = (number) => {
    for(let i = 1; i <= number; i++){
        if(i % 2 === 0){
            console.log(`${i} is even`);
        }else{
            console.log(`${i} is odd`);
        }
    }
}

module.exports = fizzbuzzUntil;