const form = document.querySelector('form');
const name = document.getElementById('name');
const location1 = document.getElementById('location');
// location is the name of a default object
const p = document.querySelector('p');

form.onsubmit = function(event){
    
    if(name.value == '' || location1.value == ''){
        event.preventDefault();
        // typically used for handling certain scenarios
        // validation
        p.innerText = 'Please enter values for name and location';
    }
}