import React, {Component} from 'react';
import request from "../../../../net/request";

class Collection extends Component {

    //Ref
    reset = React.createRef()
    adBit12 = React.createRef()
    adBit14 = React.createRef()
    debugModel = React.createRef()
    debugTriger = React.createRef()
    absParams = React.createRef()
    relParams = React.createRef()

    componentDidMount() {
        request({
            url:'/system/collection',
            method:'get'
        }).then(
            res=>{
                this.reset.current.value = res.data[0].reset
                if(res.data[0].adBit === 12) {
                    this.adBit12.current.checked = 1
                } else {
                    this.adBit14.current.checked = 1
                }
                this.debugModel.current.value = res.data[0].debugModel
                this.debugTriger.current.value = res.data[0].debugTriger
                this.absParams.current.value = res.data[0].absParams
                this.relParams.current.value = res.data[0].relParams
            },
            err=>{
                console.log(err)
            }
        )
    }

    submit = () => {
        request({
            url: this.props.location.pathname,
            method:'post',
            data: {
                reset:this.reset.current.value,
                adBit:this.adBit12.current.checked === true? 12:14,
                debugModel: this.debugModel.current.value,
                debugTriger: this.debugTriger.current.value,
                absParams: this.absParams.current.value,
                relParams: this.relParams.current.value
            }
        }).then(
            res=>{
                console.log(res)
            },
            err=>{
                console.log(err)
            }
        )
    }

    render() {
        return (
            <div className='disposeD'>
                <h4>复位：</h4><input type='text' ref={this.reset}/><br/>
                <h4>AD位数:</h4><input className='check' value='12' type='radio' name='AD' ref={this.adBit12}/>12位
                <input className='check' value='14' type='radio' name='AD' ref={this.adBit14}/>14位<br/>
                <h4>调试模式：</h4><input type='text' ref={this.debugModel}/><br/><br/>
                <h4>调零开关：</h4><input type='text' ref={this.debugTriger}/><br/><br/>
                <h4>绝对参数：</h4><input type='text' ref={this.absParams}/><br/><br/>
                <h4>相对参数：</h4><input type='text' ref={this.relParams}/><br/><br/>
                <button className='disposeBtn' onClick={this.submit}>click</button>
            </div>
        );
    }
}

export default Collection;