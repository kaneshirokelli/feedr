/*
- Your goal in this exercise is for the last line of code in this file to return the number of odd numbers in the array that's being passed in. Below are the steps that you will likely want to take in order to get there.

- Write a function, 'makeCountWhereTrue()', that accepts a function as a parameter (the "predicate function") and also returns a function. 
The function that is returned should be able to increment through an array, 
apply the predicate function to each item in that array, 
increment a counter based on the evaluation of that item (i.e. does it match what we're looking for?) 
and finally, return the final count.

- The function 'isOdd()' should accept an individual number as a parameter and evalute whether or not that number is odd. This function will also need to return something (hint: think boolean values...).
*/
/*
return function(numbersToCheck){
        var counter = 0;
        for( var i = 0; i < numbersToCheck.length; i++){
            if (myFunctionToDoSomething(numbersToCheck[i])){
                counter++;
            }
        }
        return counter;
    }*/
    
function makeCountWhereTrue (myFunctionToDoSomething) {

    return function(myArray){
        var counter = 0;
        for( var i = 0; i < myArray.length; i++){
            if (myFunctionToDoSomething(myArray[i])){
                counter++;
            }
        }
        return counter;
    }
}

function isOdd(number) {
    return (number % 2 !== 0);
}

function isEven(number) {
    return (number % 2 === 0);
}

/* Once you've filled in the two function definitions above, the line below should package up 'makeCountWhereTrue()' and 'isOdd()' into a single function that accepts an array of items as a parameter, loops through it and returns a count of how many of those items are odd numbers. This new function is being assigned to the variable 'countTheOdds'. */

var countTheOdds = makeCountWhereTrue(isOdd);
var countTheEvens = makeCountWhereTrue(isEven);

var countTheOdds2 = function(myArray){
        var counter = 0;
        for( var i = 0; i < myArray.length; i++){
            if (myArray[i] % 2 !== 0){
                counter++;
            }
        }
        return counter;
    }

/*  The final line below calls our new 'countTheOdds()' function and passes in an array of numbers. Once your code is working, the line below should return the number 4. */

console.log(countTheOdds([1, 2, 3, 4, 5, 6, 7, 8, 9 ,10, 11]));

console.log(countTheEvens([1, 2, 3, 4, 5, 6, 7, 8, 9 ,10, 11]));



















