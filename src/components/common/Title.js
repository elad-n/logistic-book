import React from 'react';

function Title({ text, bgColor, classes }) {
    return <div className={`padding-2 bg-color-${bgColor} ${classes} f-white f-xl`}>{text}</div>
}

export default Title;