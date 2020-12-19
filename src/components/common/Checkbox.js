import React from 'react';

export default function Checkbox({handleEvent, color, classes, checked}) {
    return <label>
        <input type="checkbox"
               onChange={handleEvent}
               checked={checked}
               className={`base-btn bg-color-${color} ${classes}`}
        />
    </label>
}