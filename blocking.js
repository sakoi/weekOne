//using blocking code properties

//link node filesystem library for read to text filesystem
var fs = require('fs');

//open and read food list
var food = fs.readFileSync('food.txt', 'utf8');

//print food heading
console.log('FOOD');

//print food list
console.log(food);

//open and read drink list
var drink = fs.readFileSync('drinks.txt', 'utf8');

//print food heading
console.log('\nDRINKS');

//print food list
console.log(drink);