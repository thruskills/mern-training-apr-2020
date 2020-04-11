// 1. get the html button element
const btn = document.getElementById('btn');
// document is an in-built object that represents your page

let i =0;

function rndColor(max){
    return Math.floor(Math.random() * max);
}

function changeBg(){
    // change the background color randomly
    // instead of hardcoding the numbers r, g, b
    // we should generate random numbers (0-255)
 
    var color = `rgb(${rndColor(255)},${rndColor(255)},${rndColor(255)})`; // string literals with interpolation

    console.log(color);

    document.body.style.backgroundColor = color;
}

function textColorChange(){
    btn.style.color = `rgb(${rndColor(255)},${rndColor(255)},${rndColor(255)})`;
    if(i++ == 5){
        btn.removeEventListener('click',textColorChange);
    }
}


// add the event listner
btn.addEventListener('click', changeBg);
btn.addEventListener('click', textColorChange);

