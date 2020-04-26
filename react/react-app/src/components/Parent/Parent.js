import React from 'react';
import Child from './../Child/Child';

function sayHello(){
    alert('Hi .... ')
}

function  Parent(){
    return <div>
        <Child handleAction={sayHello}/>
    </div>
}

export default Parent;