import { memo } from "react";
import "./MapPinPinWithName.css";

const MapPinPinWithName = memo(
  ({ indicatorText, locationName, numberValue }) => {
    return (
      <div className="map-pin-pin-with-name4">
        <div className="tooltip-wrapper">
          <div className="tooltip4">
            <img className="indicator-icon4" alt="" src={indicatorText} />
            <div className="title-parent2">
              <div className="title5">{locationName}</div>
              <input
                className="amount8"
                placeholder={numberValue}
                type="text"
              />
            </div>
            <img className="arrow-icon4" alt="" src="/arrow.svg" />
          </div>
        </div>
      </div>
    );
  }
);

export default MapPinPinWithName;
