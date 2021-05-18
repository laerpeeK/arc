import React, {Component} from 'react';
import request from "../../net/request";
import usn from '../../asserts/img/usnn.png'
import pwd from '../../asserts/img/psww.png'


import './login.css'
import {Redirect} from "react-router";

class Login extends Component {

    constructor() {
        super();
        this.state = {
            username:'',
            password:'',
            message:''
        }
    }

    handleUserChange = (e)=> {
        this.setState({'username':e.target.value,'message':''});
    }

    handlePwdChange = (e)=> {
        this.setState({'password':e.target.value,'err':''});
    }

    handleSubmit =(e) =>{
        e.preventDefault();
        const {username, password} = this.state;
        const regUser = /^[a-z0-9]{5,11}$/g;
        const regPwd = /^[a-z0-9]{5,11}$/g;
        if(!regUser.test(username)||!regPwd.test(password)) {
            this.setState({
                username: '',
                password: '',
                message:`输入错误 ,用户输入规则：5-11位数字/大小写字母组合！`
            })
            return
        }
        request({
            url:'/login',
            method: 'post',
            data: {
                username,
                password
            }
        }).then(
            (res)=> {
                console.log(res);
                if(res.data !== 'success'){
                    this.setState({message:res.data})
                }
                if(document.cookie) {
                    this.props.history.replace('/')
                }
            },
            (err)=> {
                console.log(err);
            }
        )
    }



    render() {
        if(document.cookie) {
            return <Redirect to='/'/>
        }
        return (
            <div className='login_bgi'>
                <div className='login_center'>
                    <h2>电弧故障检测系统</h2>
                    <form onSubmit={this.handleSubmit} className='lgForm'>
                        <div>
                            <label htmlFor="userName"><img src={usn} alt ="用户名"/></label>
                            <input className='login_input' id="userName" placeholder="username" type="text" onChange={this.handleUserChange} value={this.state.username}/>
                        </div>
                        <div>
                            <label htmlFor="passWord"><img src={pwd} alt="密码"/></label>
                            <input className='login_input' id="passWord" placeholder="password" type="password" onChange={this.handlePwdChange} value={this.state.password}/>
                        </div>
                        <div className='login_tips' onBlur={this.handleErr}>
                            {this.state.message}
                        </div>
                        <div>
                            <button className='login_submit' id="btn" type='submit' value='确认登录' >确认登录</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;