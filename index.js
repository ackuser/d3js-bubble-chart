// Import stylesheets
import "./style.css";

import * as d3 from "d3";


const dataset = [
  {
    type: "Sample 1",
    value: 50,
    radius: 7
  },
  {
    type: "Sample 2",
    value: 30,
    radius: 11
  },
  {
    type: "Sample 3",
    value: 10,
    radius: 3
  }
];

const maxY = d3.max(dataset, d => d.value);

const total = d3.sum(dataset, d => d.value);

//const keys = d3.values(dataset, d => d.type).keys();

//console.log(maxY, total, keys)

var margin = { top: 40, right: 150, bottom: 60, left: 30 },
  width = 500 - margin.left - margin.right,
  height = 420 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3
  .select("#viz")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.csv(
  "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/4_ThreeNum.csv",
  function(data) {
    // ---------------------------//
    //       AXIS  AND SCALE      //
    // ---------------------------//

    // Add X axis
    var x = d3
      .scaleLinear()
      .domain([0, 45000])
      .range([0, width]);
    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).ticks(3));

    // Add Y axis
    var y = d3
      .scaleLinear()
      .domain([35, 90])
      .range([height, 0]);
    svg.append("g").call(d3.axisLeft(y));

    // Add Y axis label:
    svg
      .append("text")
      .attr("text-anchor", "end")
      .attr("x", 0)
      .attr("y", -20)
      .text("Life expectancy")
      .attr("text-anchor", "start");

    // Add a scale for bubble size
    var z = d3
      .scaleSqrt()
      .domain([200000, 1310000000])
      .range([2, 30]);

    // Add a scale for bubble color
    var myColor = d3
      .scaleOrdinal()
      .domain(["A", "B", "C"])
      .range(d3.schemeSet1);
  }
);
