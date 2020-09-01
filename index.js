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


const types = dataset.map(d => d.type);

console.log(maxY, total, types);

const margin = { top: 40, right: 150, bottom: 60, left: 30 },
  width = 500 - margin.left - margin.right,
  height = 420 - margin.top - margin.bottom;

const svg = d3
  .select("#viz")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// ---------------------------//
//       AXIS  AND SCALE      //
// ---------------------------//

// Add X axis
const x = d3
  .scaleBand()
  .domain(types)
  .range([0, width]);

svg
  .append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));

// Add Y axis
const y = d3
  .scaleLinear()
  .domain([0, maxY])
  .range([height, 0]);
  
svg.append("g").call(d3.axisLeft(y));

//Bonus ticks

// Add a scale for bubble color
var myColor = d3
  .scaleOrdinal()
  .domain(keys)
  .range(d3.schemeSet1);
