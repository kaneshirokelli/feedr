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

// var myObj = {};

// var test = function(key,value){
//     //Creates a property called someOtherPropertyName with value of VALUE
//     myObj.someOtherPropertyName = value;
// };

// var test2 = function(key,value){
//     //Creates a property of the VALUE of key with the Value of VALUE
//     myObj[key] = value;
// };

// test("nickname","john");
// test2("name","lotek");

// console.log(myObj.someOtherPropertyName);
// console.log(myObj.name);

// var myHouse = {};
//   var yourHouse = myHouse;
//   yourHouse.doors; // returns 2
//   myHouse.doors; // returns 2

//   yourHouse.doors = 4;
//   myHouse.doors; // returns 4
  
//   console.log(yourHouse.doors);
//   console.log(myHouse.doors);






var Superhero = function (firstName, superheroName) {
    // Important to understand here that the object properties firstName and superheroName
    // are set through the this keyword with the value passed through the constructor function
    var self = this;
    this.firstName = firstName;
    this.superheroName = superheroName;
    this.identity = function(){
        console.log(self.firstName + ' is ' + self.superheroName);
    }
    console.log('Superhero instantiated');
};

var superman = new Superhero('Clark', 'Superman');

// Superhero.prototype.identity = function() {
//     console.log(this.firstName + ' is ' +this.superheroName);
// }



//var superman = new Person('Clark', 'Superman');
superman.identity();

var superman = new Superhero('Clark', 'Superman');
var batman = new Superhero('Bruce', 'Batman');
var spiderman = new Superhero('Peter','Spiderman');

var superheroes = [];

superheroes.push(superman,batman,spiderman);



console.log(superheroes);

console.log(superman.firstName + ' is ' + superman.superheroName);
console.log(superman2.firstName + ' is ' + superman2.superheroName);
superman2.firstName = 'John';
console.log(superman.firstName + ' is ' + superman.superheroName);
console.log(superman2.firstName + ' is ' + superman2.superheroName);


















