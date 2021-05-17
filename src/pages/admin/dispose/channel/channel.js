import React, {Component} from 'react';
import {Redirect, Route,Switch} from 'react-router'

import ChannelA from "./channelA/channelA";
import ChannelB from "./channelB/channelB";


class Channel extends Component {


    render() {
        return (
            <div className='network'>
                <Switch>
                    <Route path='/system/channel/channelA' component={ChannelA}/>
                    <Route path='/system/channel/channelB' component={ChannelB}/>
                    <Redirect to='/system/channel/channelA'/>
                </Switch>
            </div>
        );
    }
}

export default Channel;