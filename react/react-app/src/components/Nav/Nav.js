import React from 'react';
import './Nav.css';
import NavItem from './../NavItem/NavItem';

// component name starts always with capital
function Nav(){
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