import React from 'react';
import Comment from './../Comment/Comment';
import IconButton from './../IconButton/IconButton';

function Home() {
    return (
        <div className="main">
            <h1>Welcome to my pofo</h1>
            <hr />
            <p>This is my homepage</p>
            <img src="/logo512.png" height="200" width="200"/>
            <hr />
            <h2>Comments</h2>
            
            <Comment message="When you create a component, you can declare that certain props are optional or required, and you can declare what type of value that prop expects." likes="2" />

            <hr />
            <h2>Icon Button</h2>

            <IconButton>Do Something</IconButton>

            <IconButton children="Another button" /> 
        </div>
    )
}

export default Home;