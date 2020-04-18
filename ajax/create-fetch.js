console.log('Creating project using fetch API...')
const form = document.querySelector('form');
const name = document.getElementById('name');
const description = document.getElementById('description');
const coverImage = document.getElementById('coverImage');

form.onsubmit = function(e){
    e.preventDefault();
    console.log('form submit')

    fetch('http://localhost:3030/projects',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
            'name': name.value,
            'description': description.value,
            'coverImage': coverImage.value
        })
    })
    .then(response => response.json())
    .then(function(jsonData){
        console.log(jsonData)
        window.location = 'projects.html';
    });
}