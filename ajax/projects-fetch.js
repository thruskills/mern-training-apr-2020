console.log('Fetching projects...')

fetch('http://localhost:3030/projects')
    .then(function(response){
        return response.json()
    })
    .then(function(jsonData){
        jsonData.forEach(element => addProject(element));
    })
    .catch(function(err){
        console.log('Something went wrong...')
        console.log(err)
    });


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