// Do something here;

function canIDrive(){
    var ageElement = document.getElementById("age");
    var age = ageElement.value;
    var result = document.getElementById("results");
    if (age < 15){
        result.innerHTML = "You can't get a permit.";
    }else if (age == 15){
        result.innerHTML = "You can get a permit";
    }else if (age < 21 && age >= 16){
        result.innerHTML = "You can drive";
    }else if (age < 25 && age >= 21){
        result.innerHTML = "You can drink";
    }
};

var btnDrive = document.getElementById('CanIDrive');

btnDrive.addEventListener('click',canIDrive);


function fizzbuzz(){
    
    console.log('FizzBuzz');
}