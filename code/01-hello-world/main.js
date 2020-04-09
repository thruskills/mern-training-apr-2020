alert('DOM is not loaded')
// declaring a variable by name myHeading
// assigning a value to myHeading, an html element - <h1>Header 1</h1>
var myHeading = document.querySelector('h1');

// reasigning the value of h1 tag as 'Welcome to JS'
myHeading.textContent = 'Welcome to JS';

// creating a variable myBtn
// assigning the value for myBtn, <button> ... </button>
var myBtn = document.querySelector('button');

// adding an event handler for button
// click event, on click it will alert ("Hello World")
myBtn.onclick = function(){
    alert("Hello World!");
}

// ignore the below code until we cover the events
// adding an event handler - DOM is loaded
document.addEventListener("DOMContentLoaded", function(event) {
    // Your code to run since DOM is loaded and ready
    alert('DOM is loaded')
});

window.onbeforeunload = function(e){
    alert('do you really want to close');
}