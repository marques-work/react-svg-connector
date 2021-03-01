import React from "react";
import Arrow from "./Arrow";
import { ShapeConnectorProps } from "./SvgConnector";

interface LineConnectorProps extends ShapeConnectorProps {}

export default function LineConnector(props: LineConnectorProps) {
  const deltaX = props.endPoint.x - props.startPoint.x;
  const deltaY = props.endPoint.y - props.startPoint.y;

  const alpha = Math.atan(deltaY / deltaX);

  let rotateAngle = (alpha * 180) / Math.PI;

  if (deltaX < 0) {
    rotateAngle = rotateAngle + 180;
  }

  const arrowSize =
    props.arrowSize || (props.strokeWidth ? props.strokeWidth * 3 : 10);

  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <path
        {...props}
        d={`M
            ${props.startPoint.x} ${props.startPoint.y}
            L
            ${props.endPoint.x} ${props.endPoint.y}
          `}
        stroke={props.stroke || "orange"}
        strokeWidth={props.strokeWidth || 3}
      />
      {props.endArrow && (
        <Arrow
          tip={props.endPoint}
          size={arrowSize}
          rotateAngle={rotateAngle}
          stroke={props.stroke || "orange"}
        />
      )}
      {props.startArrow && (
        <Arrow
          tip={props.startPoint}
          size={arrowSize}
          rotateAngle={rotateAngle + 180}
          stroke={props.stroke || "orange"}
        />
      )}
    </svg>
  );
}
