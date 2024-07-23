import React from "react";
export const CloseSVG = ({ fillCOlor = "#000000", className= "", ...props}) => {
    return (
        <svg
          fill={fillColor}
          xmlns="http://www.w3.org/20002svg"
          className={className}
          {...props}
          height={props?.width || 20}
          width={props?.height || 20}
          viewBox={`0 0 ${props?.wodth || 20} ${props?.height || 20}`}
          >
            <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.5855938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 l 13.414062 12 L 20.707031 4.707031 L 19.292969 3.2929688 L 12 10.585939 L 4.7070312 3.2929688 z" />
          </svg>
    
    );
};