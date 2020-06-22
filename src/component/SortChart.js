import Chart from "chart.js";
import React from "react";
import { generateRandomSequence } from "../utils";
import config from "../config/config";
export default class SortChart extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
    this.state = { sequence: generateRandomSequence(config.length) };
    this.sort = new props.sort(this.state.sequence);
    this.color = props.color;
    this.title = props.title;
  }

  componentDidMount() {
    this.chart = new Chart(this.chartRef.current, {
      type: "bar",
      data: {
        labels: Array(config.length).fill(""),
        datasets: [
          {
            label: this.title,
            data: this.state.sequence,
            backgroundColor: Array(config.length).fill(this.color),
          },
        ],
      },
      options: config.barChartOptions,
    });
    this.stateGenerator = this.sort.stepSort();
    setInterval(() => {
      let sortStep = this.stateGenerator.next();
      if (!sortStep.done) {
        let nextValue = sortStep.value;
        this.chart.data.datasets[0].data = nextValue;
        this.chart.update();
      }
    }, config.animationInterval);
  }

  render() {
    return <canvas ref={this.chartRef} />;
  }
}
