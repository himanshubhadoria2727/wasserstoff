import { memo } from "react";
import "./InformerInfoWithIcon.css";

const InformerInfoWithIcon = memo(
  ({ iconImageUrl, dataLabel, earningValue, iconLabel }) => {
    return (
      <div className="informer-info-with-icon">
        <img className="icon1" alt="" src={iconImageUrl} />
        <div className="info">
          <div className="title4">{dataLabel}</div>
          <div className="amount7">
            <div className="value">{earningValue}</div>
            <div className="indicator">
              <img className="up-icon" alt="" src={iconLabel} />
              <div className="div">145</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default InformerInfoWithIcon;
