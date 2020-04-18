console.log('jquery...')

$.ajax({
    type: 'GET',
    url: 'http://localhost:3030/projects',
    success: function(result){
        result.forEach(element => {
            addProject(element);
        });
    }
})

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