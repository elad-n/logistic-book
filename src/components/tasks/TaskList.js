import React, {memo} from 'react';
import Checkbox from '../common/Checkbox';
import DropDown from '../common/dropDown/DropDown';

function TableHead({ tasks = [] ,exclude}) {
    if (!tasks.length) return null;

    let header = Object.keys(tasks[0]);

    return header.map((key, index) => (!exclude.includes(key) ? <th key={index}>{key.toUpperCase()}</th> : null))
}

function TableBody({ tasks = [], setDriverToTask, availableDrivers = [] , setTaskVisible }) {
    const driversOptions = availableDrivers.map(driver => ({ id: driver.id, label: `${driver.name.first} ${driver.name.last}` }) );
    return tasks.map(task => {
        const {id, title, assignee, address, latitude, longitude, visible} = task;
        return (
            <tr key={id}>
                <td>{id}</td>
                <td>{title}</td>
                <td>
                    <DropDown
                        prompt="Select driver..."
                        selectedValue={assignee}
                        options={driversOptions}
                        onChange={driverId=> setDriverToTask(driverId, id)}
                    />
                </td>
                <td>{address}</td>
                <td>{latitude}</td>
                <td>{longitude}</td>
                <td><Checkbox checked={visible} handleEvent={(e) => setTaskVisible(id, e)}/></td>
            </tr>
        )
    })
}

const Tasks = memo(({ tasks = [], availableDrivers = [], setDriverToTask ,setTaskVisible, exclude }) => {
    if (!tasks.length) return null;

    return <table id="tasks-table" className="margin-x-5 margin-t-5 tasks-container">
        <thead>
        <tr><TableHead tasks={tasks} exclude={exclude} /></tr>
        </thead>
        <tbody><TableBody setTaskVisible={setTaskVisible} tasks={tasks} availableDrivers={availableDrivers} setDriverToTask={setDriverToTask}/></tbody>
    </table>
});

export default Tasks;