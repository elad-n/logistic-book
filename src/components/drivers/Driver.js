import React, { memo } from 'react';
import ActionButton from '../common/ActionButton';

function nameToInitials(val) {
    if (!val || !val.match(/\S/)) return 'N/A';

    return (
        val
            .trim()
            .replace(/[\W_][ ]+/g, '')
            .split(' ')
            .slice(0, 2)
            .map(word => word.charAt(0))
            .join('')
    );
}

function TextAvatar({ avatarText = '', classes }) {
    return <div className={`${classes} avatar d-flex flex-center text-uppercase justify-content-center`}>
        <span>{avatarText}</span>
    </div>
}

function ImageAvatar({ src, name, classes }) {
    return <img className={`avatar ${classes}`} alt={name} src={src} />;
}

function Avatar({ name, img, classes }) {
    return <div className="avatar-container">
        {img ? <ImageAvatar classes={classes} src={img}/> : <TextAvatar classes={classes} avatarText={nameToInitials(name)}/>}
    </div>
}

function KeyValueLabel({ keyStr, val, classes }) {
    return <div className={classes}>
        <div>{keyStr}:</div> <div>{val || 'N/A'}</div>
    </div>
}

function Label({ text, classes }) {
    return <div className={classes}>{text || 'N/A'}</div>
}

const Driver = memo(({ id, name, age, location = {}, picture, phone, itemClass, removeDriver, locateDriver, task }) => {
        const fullName = `${name.first} ${name.last}`;

        return (<div className={`${itemClass} driver-container padding-2 b-light-g border-r`}>
            <div className="d-flex">
                <div className="col margin-r-2">
                    <Avatar classes="margin-b-2" img={picture} />
                    <KeyValueLabel classes="margin-bottom-1 f-sm f-light-gray" keyStr="Tasks" val={task} />
                </div>
                <div className="col border-r flex-1 align-start mr-2">
                    <Label classes="margin-b-1 f-lg f-black" text={fullName}/>
                    <KeyValueLabel classes="margin-b-1 f-sm f-light-gray" keyStr="Age" val={age} />
                    <KeyValueLabel classes="f-sm f-light-gray" keyStr="Phone number" val={phone} />
                </div>
            </div>
            <div className="d-flex justify-end">
                <ActionButton classes="margin-r-1 action-btn" color="blue" clickHandler={() => locateDriver(location)} text="location"/>
                <ActionButton classes="action-btn" color="red" clickHandler={() => removeDriver(id)} text="remove"/>
            </div>

        </div>)
    }
)

export default Driver;