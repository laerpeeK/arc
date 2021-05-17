import React, {Component} from 'react';
import request from "../../../../net/request";
class Equipment extends Component {

    //ref
    encode = React.createRef()
    enname = React.createRef()
    location = React.createRef()
    channelNum = React.createRef()
    watchDog = React.createRef()

    componentDidMount() {
        request({
            url:this.props.location.pathname,
            method: 'get'
        }).then(
            res=>{
                this.encode.current.value = res.data[0].encode
                this.enname.current.value = res.data[0].enname
                this.location.current.value = res.data[0].location
                this.channelNum.current.value = res.data[0].channelNum
                this.watchDog.current.value = res.data[0].watchDog
            },
            err=>{
                console.log(err)
            }
        )
    }

    render() {
        return (
            <div className='disposeD'>
                <h4>编号：</h4><input type='text' ref={this.encode}/><br/><br/>
                <h4>名称：</h4><input type='text' ref={this.enname}/><br/><br/>
                <h4>位置：</h4><input type='text' ref={this.location}/><br/><br/>
                <h4>通道数：</h4><input type='text' ref={this.channelNum}/><br/><br/>
                <h4>看门狗：</h4><input type='text' ref={this.watchDog}/><br/><br/>
                <button className='disposeBtn'>click</button>
            </div>
        );
    }
}

export default Equipment;