import React, {Component} from 'react';
import request from "../../../../../net/request";
class ChannelB extends Component {

    //Ref
    trigerA = React.createRef()
    trigerB = React.createRef()
    trigerC = React.createRef()
    length = React.createRef()
    level = React.createRef()
    pre = React.createRef()
    rate = React.createRef()

    componentDidMount() {
        request({
            url:this.props.location.pathname,
            method:'get'
        }).then(
            res=>{
                if(res.data[0].triger === 0) {
                    this.trigerA.current.checked  = true
                }
                if(res.data[0].triger === 1) {
                    this.trigerB.current.checked = true
                }
                if(res.data[0].triger === 2) {
                    this.trigerC.current.checked = true
                }
                this.level.current.value = res.data[0].level
                this.length.current.value = res.data[0].length
                this.pre.current.value = res.data[0].pre
                this.rate.current.value = res.data[0].rate
            },
            err=>{
                console.log(err)
            }
        )
    }

    changeChannel = () => {
        this.props.history.replace('/system/channel/channelA')
    }

    render() {
        return (
            <div>
                <h4>
                    <button className='netBtn' onClick={this.changeChannel}>A</button>通道</h4><br/><br/>
                <h4>开关：</h4><input className='check' value= '12' type='radio' name='AD' ref={this.trigerA}/>禁用
                <input className='check' value= '12' type='radio' name='AD' ref={this.trigerB}/>启用
                <input className='check' value= '12' type='radio' name='AD' ref={this.trigerC}/>实时<br/>
                <h4>触发电平：</h4><input type='text' ref={this.level}/><br/>
                <h4>触发长度：</h4><input type='text' ref={this.length}/><br/>
                <h4>预触发：</h4><input type='text' ref={this.pre}/><br/>
                <h4>抽样率：</h4><input type='text' ref={this.rate}/><br/>
                <button className='disposeBtnNet'>click</button>
            </div>
        );
    }
}

export default ChannelB;