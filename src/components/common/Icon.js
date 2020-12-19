import React from 'react';
import task from '../../icons/carriage.svg';
import driver from '../../icons/viking.svg';

export default function Icon({ type, text }) {
    return <div>
        <span style={{color: 'white'}}>{text}</span>
        <img className="svg" src={type==='driver' ? driver : task} alt="text"/>
    </div>
}