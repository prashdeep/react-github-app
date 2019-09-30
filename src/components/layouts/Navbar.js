import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({title})=>{

        return (
            <nav className="navbar bg-primary">
                <i className="fa fa-github"> {title}</i>
            </nav>
        )
    }
                            
    Navbar.defaultProps={
        title:"GitHub Finder",
        icon:'fa fa-github'
    }

    Navbar.propTypes={
        title: PropTypes.string.isRequired,
        icon:PropTypes.string.isRequired
    } 

export default Navbar
