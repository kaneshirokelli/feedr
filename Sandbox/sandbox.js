var results = document.getElementById('results');
var words = ['Subaru', 'New Orleans', 'FizzBuzz', 'General', 'Assembly']
results.innerHTML = "This Loaded!";

function generateStuff() {
    var currentIndex = Math.floor(Math.random() * words.length);
    results.innerHTML = words[currentIndex];
}

document.getElementById("test").addEventListener("click", generateStuff);