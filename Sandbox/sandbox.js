// var results = document.getElementById('results');
// var words = ['Subaru', 'New Orleans', 'FizzBuzz', 'General', 'Assembly']
// results.innerHTML = "This Loaded!";

// function generateStuff() {
//     var currentIndex = Math.floor(Math.random() * words.length);
//     results.innerHTML = words[currentIndex];
// }

// var x = 10;

// console.log(x);

// function add3(){
//     x = x + 3;
// };
// add3();
// console.log(x);
// add3();
// console.log(x);

// document.getElementById("test").addEventListener("click", generateStuff);

var myObj = {};

var test = function(key,value){
    //Creates a property called someOtherPropertyName with value of VALUE
    myObj.someOtherPropertyName = value;
};

var test2 = function(key,value){
    //Creates a property of the VALUE of key with the Value of VALUE
    myObj[key] = value;
};

test("nickname","john");
test2("name","lotek");

console.log(myObj.someOtherPropertyName);
console.log(myObj.name);