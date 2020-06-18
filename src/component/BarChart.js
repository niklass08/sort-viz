import React from 'react';
import Chart from 'chart.js'
export default class BarChart extends React.Component {

    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }

    componentDidMount() {
        this.chart = new Chart(this.chartRef.current, {
            type: 'bar',
            data: {
                labels: this.props.labels,
                datasets: [{
                    label: this.props.title,
                    data: this.props.data,
                    backgroundColor: this.props.color
                }]
            }
        });
    }

    render() {
        return <canvas ref={this.chartRef} />;
    }
}