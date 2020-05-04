import React from 'react';

const data = {
    "number-guessing-game": {
        name: "Number Guessing Game",
        image: "https://www.mypofo.com/images/projects/number-guessing-game.png"
    },
    "js-console": {
        name: "JS Console",
        image: "https://www.mypofo.com/images/projects/js-console.png"
    },
    "image-gallery": {
        name: "Image Gallery",
        image: "https://www.mypofo.com/images/projects/image-gallery.png"
    }
}

function ProjectDetail({ match }){
    let  projectSlug = match.params.slug;
    let projectDetail = data[projectSlug];
   
    return (
        <div>
            <h1>{projectDetail.name}</h1>
            <img className="card-img-top" src={projectDetail.image} style={{borderBottom:"1px solid #e9ecef"}} />
        </div>
    )
}

export default ProjectDetail;