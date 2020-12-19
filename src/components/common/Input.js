import React from 'react';

export default function ({ placeholder, onChangeHandler, classes }) {
    return (<input className={`${classes} search-input`} type="text" placeholder={placeholder} onChange={onChangeHandler} />)
}