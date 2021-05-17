import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import './myNavLink.css'

class MyNavLink extends Component {
    render() {
        return (
            <NavLink activeClassName = 'act' className='navL' {...this.props}/>
        );
    }
}
export default MyNavLink;