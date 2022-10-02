import React from "react";
import "./index.css";

interface Props {
  visible?: boolean;
}
export const NASASpotStation: React.FC<Props> = ({ visible = true }) => {
  const [show, setShow] = React.useState(false);

  if (!visible) {
    return null;
  }

  return (
    <div className="nasa-spot-container">
      {!show && (
        <div className="nasa-spot-icon-container" onClick={() => setShow(true)}>
          When will the international space station be visible?
        </div>
      )}
      {show && (
        <div
          className="nasa-spot-icon-container-hide"
          onClick={() => setShow(false)}
        >
          Hide
        </div>
      )}
      {show && (
        <div
          style={{
            display: "inline-block",
            border: "1px solid #CCC",
            borderRadius: "6px",
            WebkitBorderRadius: "6px",
            position: "relative",
            overflow: "hidden",
            width: "310px",
            height: "450px",
          }}
        >
          <iframe
            title="ISS Oberservation"
            src="https://spotthestation.nasa.gov/widget/widget2.cfm?theme=2"
            width={310}
            height={450}
            frameBorder={0}
          />
        </div>
      )}
    </div>
  );
};
