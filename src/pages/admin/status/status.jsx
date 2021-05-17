import React, {Component} from 'react';
import request from "../../../net/request";
import './status.css'
class Status extends Component {

    //ref
    date = React.createRef()
    start = React.createRef()
    end = React.createRef()

    submit = ()=> {
        var timeStart = new Date(`${this.date.current.value} ${this.start.current.value}`).getTime()
        var timeEnd = new Date(`${this.date.current.value} ${this.end.current.value}`).getTime()
        console.log(timeStart, timeEnd)
        request({
            url:this.props.location.pathname,
            method: 'get',
            params: {
                timeStart,
                timeEnd
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
            <div className='status'>
                <h4>请输入查询时间段：</h4>
                <input type='date' ref={this.date}/>:
                <input type='text' placeholder='hh:mm:ss' ref={this.start}/>——<input type='text' placeholder='hh:mm:ss' ref={this.end}/>
                <button onClick={this.submit}>确定</button>
                <ol>
                    <li></li>
                </ol>
            </div>
        );
    }
}

export default Status;