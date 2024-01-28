import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Density", { role: "style" }],
  [2020, 8.94, "#aabbcc"], 
  [2021, 10.49, "#aabbcc"], 
  [2022, 19.3, "#aabbcc"],
  [2023, 21.45, "color: #aabbcc"],
  [2024, 15, "#aabbcc"],
  [2025, 10, "#aabbcc"],
  [2026, 12, "#aabbcc"],
  [2027, 8, "#aabbcc"],
  [2028, 14, "#aabbcc"],
  [2029, 9, "#aabbcc"],
  [2030, 16, "#dd4477"],
  [2031, 11, "#dd4477"],
  [2032, 13, "#dd4477"],
  [2033, 17, "#dd4477"],
  [2034, 18, "#dd4477"],
  [2035, 20, "#dd4477"],
  [2036, 22, "#dd4477"],
  [2037, 19, "#dd4477"],
  [2038, 23, "#dd4477"],
  [2039, 24, "#dd4477"],
  [2040, 25, "#aabbcc"],
  [2041, 21, "#aabbcc"],
  [2042, 26, "#aabbcc"],
  [2043, 27, "#aabbcc"],
  [2044, 28, "#aabbcc"],
  [2045, 29, "#aabbcc"],
  [2046, 30, "#aabbcc"],
  [2047, 31, "#aabbcc"],
  [2048, 32, "#aabbcc"],
];



export function ColumnChart() {
  const options = {
    chartArea: { width: "55%", height: "70%" }, 
    legend: { position: "none" },
    vAxis: { 
      ticks: [], 
      baselineColor: 'transparent'
    },
    hAxis: { textPosition: 'none', gridlines: { color: "transparent" }, format: '####', baselineColor: 'transparent' },
    series: {
      0: {
        lineWidth: 5, 
        visibleInLegend: false 
      }
    }
  };


  return (
    <Chart
      chartType="ColumnChart"
      width="100%"
      height="100px"
      data={data}
      options={options}
    />
  );
}
