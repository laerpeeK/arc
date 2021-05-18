import React, {Component} from 'react';

class Chart extends Component {
    render() {
        const {rate, timeStart, graph} = this.props
        console.log(this.props)
        return (
            <div>
                {rate}
                {timeStart}
            </div>
        );
    }
}

export default Chart;