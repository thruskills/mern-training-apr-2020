import React from 'react';

function  Child({onAction}){
    return <button onClick={onAction}>Say Hello!</button>
}

export default Child;