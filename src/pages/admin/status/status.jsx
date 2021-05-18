import React, {Component} from 'react';
import request from "../../../net/request";
import './status.css'
import Chart from "../../../components/chart/charts";
class Status extends Component {

    constructor() {
        super();
        this.state = {
            data:[],
            graph:[],
            rate:'',
            timeStart:''
        }
    }

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
                this.setState({
                    data:res.data
                })
            },
            err=>{
                console.log(err)
            }
        )
    }

    getFile = (e)=> {
        request({
            url:'/getFile',
            method: 'get',
            params:{
                filename:e.target.id
            }
        }).then(
            res => {
                this.setState({
                    graph:res.data.data,
                    rate:'50000000',
                    timeStart:e.target.innerText
                })
            },
            err => {
                console.log(err)
            }
        )
    }

    render() {
        return (
            <div className='status'>
                <h4>请输入查询时间段：</h4>
                <input type='date' ref={this.date}/>{` : `}
                <input type='text' placeholder='hh:mm:ss' ref={this.start}/>——<input type='text' placeholder='hh:mm:ss' ref={this.end}/>
                <button onClick={this.submit}>确定</button>
                <ol className='status-ol'>文件数量：{this.state.data.length}
                        {
                            this.state.data.map((data)=>{
                                return <li key={data.file} id={data.file} onClick={this.getFile}>{new Date(parseInt(data.ymd)).toLocaleString()+`:${data.ms}:${data.us}:${data.ns}`}</li>
                            })
                        }
                </ol>
                <div className='status-chart'>
                    <Chart data={this.state.data} graph={this.state.graph} rate={this.state.rate}/>
                </div>
            </div>
        );
    }
}

export default Status;