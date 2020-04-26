import React from 'react';
import './Nav.css';
import NavItem from './../NavItem/NavItem';

const navItems = [
    {link:'', title:'', active:''},
    {link:'', title:'', active:''},
    {link:'', title:'', active:''},
    {link:'', title:'', active:''}
];

// component name starts always with capital
function Nav(props){
    return (
        <nav>
            <ul>
                {/* each nav item will be passed a link url, title and active flag */}
                <NavItem link="/" title="Home" active="active" />
                <NavItem link="/projects" title="Projects" />
                <NavItem link="/blog" title="Blog" />
                <NavItem link="/about" title="About" />
            </ul>
        </nav>
    )
}

export default Nav;