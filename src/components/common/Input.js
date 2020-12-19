import React from 'react';
import cn from 'class-names';

export default function ({ placeholder, onChangeHandler, classes }) {
    return (<input className={cn(classes, 'search-input')} type="text" placeholder={placeholder} onChange={onChangeHandler} />)
}