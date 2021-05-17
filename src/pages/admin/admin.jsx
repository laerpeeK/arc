import React, {Component} from 'react';
import {Redirect} from "react-router";
import './admin.css'
import Navi from "../../components/navi/navi";
import MainContent from "../../components/maincontent/mainContent";
class Admin extends Component {
    render() {
        if(!document.cookie) {
            return <Redirect to='/login'/>
        }
        return (
            <div className='admin'>
                <Navi/>
                <MainContent/>
            </div>
        );
    }
}

export default Admin;