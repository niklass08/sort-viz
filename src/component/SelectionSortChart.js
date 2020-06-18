import BarChart from './BarChart';
import Chart from 'chart.js'
import React from 'react';
import { generateRandomSequence } from '../utils';
import SelectionSort from '../sorts/selectionSort';

const LENGTH = 100
export default class SelectionSortChart extends React.Component {

    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
        this.state = { sequence: generateRandomSequence(LENGTH) };
    }

    componentDidMount() {
        this.chart = new Chart(this.chartRef.current, {
            type: 'bar',
            data: {
                labels: Array(LENGTH).fill(''),
                datasets: [{
                    label: 'Selection sort',
                    data: this.state.sequence,
                    backgroundColor: '#70CAD1'
                }]
            },
            options: {
                animation: {
                    duration: 0 // general animation time
                },
                hover: {
                    animationDuration: 0 // duration of animations when hovering an item
                },
                responsiveAnimationDuration: 0 // animation duration after a resize
            }
        });
        this.sort = new SelectionSort(this.state.sequence);
        this.stateGenerator = this.sort.stepSort();
        setInterval(() => {
            let nextValue = this.stateGenerator.next().value;
            if (nextValue) {
                this.chart.data.datasets[0].data = nextValue;
                this.chart.update()
            }
        }, 100);
    }

    render() {
        return <canvas ref={this.chartRef} />;
    }
}