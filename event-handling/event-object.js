let divs = document.querySelectorAll('div');

function rndColor(max){
    return Math.floor(Math.random() * max);
}

function changeBg(event){

    var color = `rgb(${rndColor(255)},${rndColor(255)},${rndColor(255)})`; // string literals with interpolation
    
    event.target.style.backgroundColor = color;
}

for(i =0 ;i < divs.length; i++){
    divs[i].onclick = changeBg;
}