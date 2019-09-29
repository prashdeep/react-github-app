import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Navbar extends Component {

    static  defaultProps={
        title:"GitHub Finder",
        icon:'fa fa-github'
    }

    static propTypes={
        title: PropTypes.string.isRequired,
        icon:PropTypes.string.isRequired
    } 
    render() {

        return (
            <nav className="navbar bg-primary">
                <i className="fa fa-github"> {this.props.title}</i>
            </nav>
        )
    }
}

export default Navbar
