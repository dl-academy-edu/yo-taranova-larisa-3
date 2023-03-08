let userNumber = prompt();
let i = 0;
let factorialNumber = userNumber;
let sus = userNumber;
let sis = userNumber;

while (typeof userNumber === "string") {
    console.error('This is not a number');
    typeof userNumber === "number"
}

for ( let i = 1; i <= userNumber; i++) {
    if (i % 4 === 0) 
    continue;
    console.log(i)
}

while ( i<= userNumber ) {
    factorialNumber *= 1 * (i+1)
    i++
}
console.log(factorialNumber)

for (let i = 2; i <= sus; i++) {
    userNumber = userNumber * sis;
}
console.log(userNumber);