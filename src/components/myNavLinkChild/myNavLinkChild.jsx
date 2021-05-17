import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class MyNavLinkChild extends Component {
    render() {
        return (
            <NavLink activeClassName='actChild' className='navL_child' {...this.props}/>
        );
    }
}

export default MyNavLinkChild;