import React, {Component} from 'react';
import request from "../../../../../net/request";


class NetA extends Component {

    //ref
    ipAddress = React.createRef()
    mask = React.createRef()
    gateWay = React.createRef()
    dns = React.createRef()
    mac = React.createRef()

    changeNet = ()=> {
        this.props.history.replace('/system/network/netB')
    }

    componentDidMount() {
        request({
            url: this.props.location.pathname,
            method: 'get'
        }).then(
            res=> {
                this.ipAddress.current.value = res.data[0].idAddress//前端ip，数据库存储成id懒得改了
                this.gateWay.current.value = res.data[0].gateWay
                this.mac.current.value = res.data[0].mac
                this.mask.current.value = res.data[0].mask
                this.dns.current.value = res.data[0].dns
            },
            err=> {
                console.log(err)
            }
        )
    }

    render() {
        return(
            <div>
                <h4>
                    切换<button className='netBtn' onClick={this.changeNet}>B</button>网</h4><br/><br/>
                <h4>IP地址：</h4><input type='text' ref={this.ipAddress}/><br/>
                <h4>子网掩码：</h4><input type='text' ref={this.mask}/><br/>
                <h4>默认网关：</h4><input type='text' ref={this.gateWay}/><br/>
                <h4>DNS：</h4><input type='text' ref={this.dns}/><br/>
                <h4>MAC：</h4><input type='text' ref={this.mac}/><br/>
                <button className='disposeBtnNet'>click</button>
            </div>
        )
    }
}

export default NetA;