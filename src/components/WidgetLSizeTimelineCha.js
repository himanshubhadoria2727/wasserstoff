import { memo } from "react";
import "./WidgetLSizeTimelineCha.css";
import { ColumnChart } from "../charts";

const WidgetLSizeTimelineCha = memo(() => {
  return (
    <>
    {/* <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} /> */}
    <div className="widget-l-size-timeline-cha">
      <div className="info1">
        <div className="value1">
          <div className="value2">
            <div className="title6">Sales Figures</div>
            <h1>$10,430</h1>
            {/* <input className="value3" placeholder="" type="text" /> */}
          </div>
        </div>
      </div>
      <div className="graph">
        <ColumnChart/>
        <div className="line">
          <div className="bg2" />
          <div className="cian-parent">
            <div className="cian" />
            <div className="yellow" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
});

export default WidgetLSizeTimelineCha;
