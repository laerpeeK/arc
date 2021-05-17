import React, {Component} from 'react';
import MyNavLinkChild from "../../../components/myNavLinkChild/myNavLinkChild";
import {Route,Switch,Redirect} from "react-router";

import Collection from "./collection/collection";
import Channel from "./channel/channel";
import Equipment from "./equipment/equipment";
import Network from "./network/network";
import FtpSet from "./ftpSet/ftpSet";
import SystemSet from "./systemSet/systemSet";

import './dispose.css'

class Dispose extends Component {
    render() {
        return (
            <div className='system_out'>
                <ul>
                    <li><MyNavLinkChild to='/system/collection'>采集</MyNavLinkChild></li>
                    <li><MyNavLinkChild to='/system/channel'>通道</MyNavLinkChild></li>
                    <li><MyNavLinkChild to='/system/equipment'>设备</MyNavLinkChild></li>
                    <li><MyNavLinkChild to='/system/network'>网络</MyNavLinkChild></li>
                    <li><MyNavLinkChild to='/system/ftpSet'>FTP</MyNavLinkChild></li>
                    <li><MyNavLinkChild to='/system/systemSet'>系统</MyNavLinkChild></li>
                </ul>
                <div className='system_in'>
                    <Switch>
                        <Route path='/system/collection' component={Collection}/>
                        <Route path= '/system/channel' component={Channel}/>
                        <Route path= '/system/equipment' component={Equipment}/>
                        <Route path= '/system/network' component={Network}/>
                        <Route path= '/system/ftpSet' component={FtpSet}/>
                        <Route path= '/system/systemSet' component={SystemSet}/>
                        <Redirect to='/system/Collection'/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Dispose;