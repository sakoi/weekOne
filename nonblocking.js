//using non-blocking properties

//link to node filesystem library
var fs = require('fs');

//load food asynchronously
var food = fs.readFile('food.txt', 'utf8', function(err, food){
    
   //display food list when done
   if (err){
       console.log(err);
   }else{   
       console.log(food);
   } 
   
});

//print food header
console.log('FOOD');

//load drink asynchronously
var drink = fs.readFile('drinks.txt', 'utf8', function(err, drink){
    
    //display drink list when done
    if (err){
        console.log(err);
    }else{
        //print drink header
        console.log('\nDRINKS');
        console.log(drink);
    }
})

