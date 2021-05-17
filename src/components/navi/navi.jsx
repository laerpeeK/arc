import React, {Component} from 'react';
import MyNavLink from "../myNavLink/myNavLink";
import './navi.css'

class Navi extends Component {
    render() {
        return (
            <div className='nav'>
                <h1>ARC</h1>
                <ul className='nav'>
                    <li><MyNavLink to='/location'>超声定位</MyNavLink></li>
                    <li><MyNavLink to='/status'>设备状态</MyNavLink></li>
                    <li><MyNavLink to='/system'>系统配置</MyNavLink></li>
                    <li><MyNavLink to='/verSon'>版本信息</MyNavLink></li>
                    <li><MyNavLink to='/update'>在线升级</MyNavLink></li>
                    <li><MyNavLink to='/reLogin'>系统重启</MyNavLink></li>
                    <li><MyNavLink to='/sdReset'>SD卡格式化</MyNavLink></li>
                </ul>
            </div>
        );
    }
}

export default Navi;