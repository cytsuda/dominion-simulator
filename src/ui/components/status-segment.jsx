import React from "react";
import "ui/styles/status-segment.css";

const StatusSegment = (props) => (
    <div className="segment">
        {props.children}
    </div>
)

export default StatusSegment;