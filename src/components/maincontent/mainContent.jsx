import React, {Component} from 'react';
import {Route, Switch} from "react-router";

import Dispose from "../../pages/admin/dispose/dispose";
import Location from "../../pages/admin/location/location";
import Status from "../../pages/admin/status/status";
import VerSon from "../../pages/admin/verson/verson";
import Update from "../../pages/admin/update/update";
import ReLogin from "../../pages/admin/relogin/relogin";

import './mainContent.css'

class MainContent extends Component {
    render() {
        return (
            <div className='main-content'>
                <Switch>
                    <Route path='/system' component={Dispose}/>
                    <Route path='/location' component={Location}/>
                    <Route path='/status' component={Status}/>
                    <Route path='/verSon' component={VerSon}/>
                    <Route path='/update' component={Update}/>
                    <Route path='/reLogin' component={ReLogin}/>
                </Switch>
            </div>
        );
    }
}

export default MainContent;