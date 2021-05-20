import React, {Component} from 'react';
import request from "../../../../net/request";

class FtpSet extends Component {

    //ref
    mainIp = React.createRef()
    mainFtpUserName = React.createRef()
    mainFtpPassWord = React.createRef()

    alterIp = React.createRef()
    alterFtpUserName = React.createRef()
    alterFtpPassWord = React.createRef()

    componentDidMount() {
        request({
            url:this.props.location.pathname,
            method: 'get'
        }).then(
            res=>{
                console.log(res.data[0].mainUserName)
                this.mainIp.current.value = res.data[0].mainIp
                this.mainFtpPassWord.current.value = res.data[0].mainPassWord
                this.mainFtpUserName.current.value = res.data[0].mainUserName
                this.alterIp.current.value = res.data[0].alterIp
                this.alterFtpUserName.current.value = res.data[0].alterUserName
                this.alterFtpPassWord.current.value = res.data[0].alterPassWord
            },
            err=>{
                console.log(err)
            }
        )
    }


    render() {
        return (
            <div className='disposeD'>
                <h4 style={{margin:0}}>主要</h4><br/>
                <h4>IP地址：</h4><input type='text' ref={this.mainIp}/><br/>
                <h4>用户名：</h4><input type='text' ref={this.mainFtpUserName}/><br/>
                <h4>密码：</h4><input type='password' ref={this.mainFtpPassWord}/><br/><br/>
                <hr/>
                <h4 style={{margin:'2px'}}>备用</h4><br/>
                <h4>IP地址：</h4><input type='text' ref={this.alterIp}/><br/>
                <h4>用户名：</h4><input type='text' ref={this.alterFtpUserName}/><br/>
                <h4>密码：</h4><input type='password' ref={this.alterFtpPassWord}/><br/>
                <button className='disposeBtnFtp'>click</button>
            </div>
        );
    }
}

export default FtpSet;