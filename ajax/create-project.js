console.log('create project ...')
const form = document.querySelector('form');
const name = document.getElementById('name');
const description = document.getElementById('description');
const coverImage = document.getElementById('coverImage');
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200 ){
        let jsonResponse = JSON.parse(this.responseText);
        console.log('done... ')
        console.log(this.responseText)
        window.location = 'projects.html';
    }
}

form.onsubmit = function(e){
    console.log('Submitting form...')
    e.preventDefault();

    var data = {
        "name": name.value,
        "description": description.value,
        "coverImage": coverImage.value
    }
    
    xhr.open('POST', 'http://localhost:3030/projects', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    console.log(JSON.stringify(data));
    xhr.send(JSON.stringify(data));
}