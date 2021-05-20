import React, {Component} from 'react';
import {Redirect,Route, Switch} from "react-router";
import NetA from "./netA/netA";
import NetB from "./netB/netB";


class Network extends Component {
    render() {
        return (
            <div className='network'>
                <Switch>
                    <Route path='/system/network/netA' component={NetA}/>
                    <Route path='/system/network/netB' component={NetB}/>
                    <Redirect to='/system/network/netA'/>
                </Switch>
            </div>
        );
    }
}

export default Network;