import React, {Component} from 'react';
import request from "../../../../net/request";

class SystemSet extends Component {


    //ref
    text  = React.createRef()
    binary = React.createRef()

    componentDidMount() {
        request({
            url: this.props.location.pathname,
            method: 'get'
        }).then(
            res=> {
                console.log(typeof res.data[0].text)
                if(res.data[0].text === 1 && res.data[0].binaray === 0) {
                    this.text.current.checked = true
                } else {
                    this.binary.current.checked = true
                }
            }
        )
    }

    render() {
        return (
            <div className='disposeD'>
                <h4>文件类型:</h4><input className='check' value= '1'type='radio' name='type' ref={this.text}/>纯文本
                <input className='check' type='radio' value= '1' name='type' ref={this.binary}/>二进制<br/>
                <button className='disposeBtn2'>click</button>
            </div>
        );
    }
}

export default SystemSet;