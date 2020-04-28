import React from 'react';
import {Button} from 'react-bootstrap';

function BootstrapPage(){
    return (
        <>
            <h1>Bootstrap buttons</h1>
            <p>
                <Button variant="primary">Primary</Button>
            </p>
            <p>
                <Button variant="secondary">Secondary</Button>
            </p>
            <p>
                <Button variant="success">Seccess</Button>
            </p>
            <p>
                <Button variant="warning">Warning</Button>
            </p>
            <p>
                <Button variant="info">Info</Button>
            </p>
            <p>
                <Button variant="danger">Danger</Button>
            </p>
        </>
    )

}

export default BootstrapPage;