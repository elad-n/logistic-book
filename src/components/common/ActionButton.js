import React from 'react';

export default function ActionButton({clickHandler, text, color, classes, type}) {
    return <button onClick={()=> {clickHandler(type)}} className={`base-btn bg-color-${color} ${classes}`}>{text}</button>
}