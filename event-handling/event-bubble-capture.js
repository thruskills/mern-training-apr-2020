var outer = document.querySelector('.outer');
var inner = document.querySelector('.inner');
var p = document.querySelector('p');

outer.addEventListener('click',function(e){
    console.log('clicked outer div');
}, true);

inner.addEventListener('click',function(e){
   // e.stopPropagation();
    console.log('clicked inner div');
}, true);

p.addEventListener('click',function(e){
    console.log('clicked p tag');
}, true);