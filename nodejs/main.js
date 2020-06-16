// fs is a core module of nodejs
var fs = require('fs');
console.log('progam started')
// asynchronous
var data = fs.readFileSync('input.txt', (err, data) => {
    if(err) {
        return console.error(err);
    }else{
        console.log(data.toString());
    }
});

console.log('progam ended');