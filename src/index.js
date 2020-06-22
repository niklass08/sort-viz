import React from "react";
import ReactDOM from "react-dom";
import SortChart from "./component/SortChart";

import SelectionSort from "./sorts/selectionSort";
import BubbleSort from "./sorts/BubbleSort";

import "./style/index.css";

ReactDOM.render(
  <React.StrictMode>
    <div class="chartContainer">
      <div class="chart">
        <SortChart
          sort={SelectionSort}
          color="#70CAD1"
          title="Selection sort"
        ></SortChart>
      </div>
      <div class="chart">
        <SortChart
          sort={BubbleSort}
          color="#70CAD1"
          title="Bubble sort"
        ></SortChart>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
