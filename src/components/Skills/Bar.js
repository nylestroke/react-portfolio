import React from 'react';
import './Skills.scss';

function Bar(props) {
    return (
        <svg className="svgBar" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(90)">
            <circle cx="50" cy="50" r="43.5" stroke="#928A97" strokeOpacity="25%" strokeWidth="13"/>
            <circle cx="50" cy="50" r="43.5" stroke="#000C24" strokeWidth="13" style={{
                strokeDasharray:275, strokeDashoffset: (100-props.procent) / 100 * 275
            }}/>
        </svg>
    );
}

export default Bar;