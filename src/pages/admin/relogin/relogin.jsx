import React, {Component} from 'react';
import request from "../../../net/request";
class ReLogin extends Component {

    reLogin = () => {
        request({
            url:'/loginOut',
            method: 'get'
        }).then(
            res => {
                console.log(res)
                this.props.history.replace('/login')
            },
            err => {
                console.log(err)
            }
        )
    }

    render() {
        return (
            <div>
                <h1>请点击<button className='reLoginBtn' onClick={this.reLogin}>此处</button>进行重启</h1>
            </div>
        );
    }
}

export default ReLogin;