import React from 'react';
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import ReactDOM from 'react-dom'


class Ticker extends React.Component { 
    data = this.props.data;

    render() {
        var group = this.props.tickers
        return (
            <LineChart width={730} height={900} data={this.props.tickers}
                margin={{ top: 200, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="5 5" />
                <XAxis dataKey="hhour" />
                <YAxis dataKey='sum'/>
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey='sum' stroke="#0095FF" />
            </LineChart>
        )
    };
}



export default Ticker;
