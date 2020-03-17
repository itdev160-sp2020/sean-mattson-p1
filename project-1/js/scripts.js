// FUNCTIONS
function change()
{
    var image = document.getElementById('adultGolden');
    image.src = "images/goldenPuppies.jpg";
}



// WELCOME MESSAGE
var user = 'Sean';
var salutation = 'Hi there, ';
var greeting = salutation + user + "! Welcome to Golden Retriever Planet!";
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

