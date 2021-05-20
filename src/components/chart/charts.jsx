import React, {Component} from 'react';
import * as echarts from 'echarts'

class Chart extends Component {

    componentDidUpdate() {
        const {rate, graph, timeStart} = this.props
        console.log(this.props)
        if(rate === '') return
        var xt = [], i = 0
        for(let i in graph) {
            xt[i] = [i,graph[i]]
        }
        var myChart = echarts.init(document.getElementById('chart'))
        myChart.setOption({
            title: {

                text: `采样起始点为${timeStart}${'\n'}采样率：${rate}Hz`
            },

            tooltip: {
                formatter: function (params) {
                    return (`第${params.value[0]}个点,<br/>
                    检测数据为${params.value[1]}`)
                },
                padding:[5,15,5,15],
                extraCssText:'width:120px;height:40px;',
            },

            legend: {
            },

            xAxis: {
            },

            yAxis: {},

            series: [{
                type: 'line',
                data: xt.splice(0,10000)
            }]
        })
    }

    render() {
        const {rate, graph, timeStart} = this.props
        return (
            <div id='chart'>
            </div>
        );
    }
}

export default Chart;