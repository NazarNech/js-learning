// coding challenge #4

//using if/else statement
// let tip;
// let bill = Number(prompt('Enter the bill: '));;

// if (bill >= 50 && bill <= 300)
//     tip = bill * 0.15;
// else
//     tip = bill * 0.2;

// let totalValue = bill + tip;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`);


//using readable ternary operator
let bill = Number(prompt('Enter the bill: '));
let tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

//using not readeble ternary operator
// let tip = (bill >= 50 && bill <= 300) ?
//     console.log(`The bill was ${bill}, the tip was ${bill * 0.15}, and the total value ${bill + (bill * 0.15)}`) :
//     console.log(`The bill was ${bill}, the tip was ${bill * 0.2}, and the total value ${bill + (bill * 0.2)}`);
