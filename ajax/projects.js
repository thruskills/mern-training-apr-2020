console.log('1. Fetching data from the server...');

// 1. Creating a new XML Http Request Object
const xhr = new XMLHttpRequest();
console.log('2. XHR object created');

// 2. define a callback function to handle the response
xhr.onreadystatechange = function(){
    console.log('5. readyState = ' + this.readyState)
    // checking for ready state = 4, which is request completed
    // and alo check if the status is 200 OK
    if(this.readyState == 4 && this.status == 200 ){
        // we will read the response from the server
        let jsonResponse = JSON.parse(this.responseText);
        
        for(let i =0; i < jsonResponse.length; i++){
            addProject(jsonResponse[i]);
        }
    }
}

// 3. open a cnnection
xhr.open('GET', 'http://localhost:3030/projects', true);
console.log('3. Connection created');

// 4. send the request to the server
xhr.send();
console.log('4. Request sent');

function addProject(project){
    let div = document.createElement('div');
    div.setAttribute('class', 'project');

    let a = document.createElement('a');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let p = document.createElement('p');
    
    a.setAttribute('href', 'project-detail.html?id=' + project._id)
    div.append(a);

    h2.innerText = project.name;
    a.append(h2);

    img.setAttribute('src', project.coverImage);
    div.append(img);

    p.innerText = project.description;
    div.append(p);

    document.body.append(div);
}