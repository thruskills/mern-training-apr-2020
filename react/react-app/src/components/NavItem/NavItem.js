import React from 'react';
import './NavItem.css';

function upperCase(text){
    return text.toUpperCase();
}

function NavItem(props) {
    const css = 'link ' +  props.active;
    console.log(css);
    return(
        <li>
            <a className={css} href={props.link}>
                {upperCase(props.title)}
            </a>
        </li>
    )
}

export default NavItem;