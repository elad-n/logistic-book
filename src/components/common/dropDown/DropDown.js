import React, {useState, memo} from 'react';
import './style.dropdown.scss';

const DropDownPrimary = memo(({options, onChange, prompt}) => {
    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);

    return <div className="dropdown">
        <div className="control" onClick={() => setOpen(prev => !prev)}>
            <div className="selected-value">{selectedValue ? selectedValue.label : prompt}</div>
            <div className={`arrow ${open && 'open'}`}/>
        </div>
        <div className={`options ${open && 'open'}`}>
            {
                options.map(option => <div
                    key={option.id}
                    className={`option ${selectedValue && selectedValue.id === option.id ? 'selected' : null}`}
                    onClick={() => {
                        onChange(option);
                        setSelectedValue(option)
                        setOpen(false);
                    }}
                >{option.label}</div>)
            }
        </div>
    </div>;
})

export default DropDownPrimary;