import React from 'react';
import './NavItem.css';

function upperCase(text){
    return text.toUpperCase();
}

function NavItem({active, link, title}) {
    const css = 'link ' + active;
    return(
        <li>
            <a className={css} href={link}>
                {upperCase(title)}
            </a>
        </li>
    )
}

export default NavItem;