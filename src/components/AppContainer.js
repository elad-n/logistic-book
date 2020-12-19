import React, {useEffect, useState} from 'react';
import Tasks from './tasks/TaskList';
import Drivers from './drivers/Drivers';
import Map from './GoogleMap';
import api from '../api-service';
import {checkIsMobile} from './utils/utilsFunctions';

// todo
//  1. clean data and change arrays to new Set().
//  2. add propTypes.
//  3. refactor scss files. with better separations.
//  4. unassign driver from task.

function getMappedLocations(rawDataLocations = []) {
    return rawDataLocations.map(item => ({
            visible: item.visible,
            type: item.type,
            lat: item.latitude,
            lng: item.longitude,
            text: item.title || `${item.name.first} ${item.name.last}, Driver.`
        })
    )
}

function AppContainer() {
    const [tasks, setTasks] = useState([]);
    const [isMobile, setIsMobile] = useState()
    const [availableDrivers, setAvailableDrivers] = useState([]);
    const [locations, setLocations] = useState([]);
    const [center, setCenter] = useState({
        lat: -62.500322,
        lng: -120.412407
    });
    const [loading, setLoading] = useState(true);
    const [originalDrivers, setOriginalDrivers] = useState([]);
    const excludedValues = ['type'];
    //TODO prepare for loading and err handling
    // const [error, setError] = useState(false);

    const removeDriver = id => {
        const newList = originalDrivers.filter(obj => id !== obj.id);
        const newLocations = locations.filter(obj => id !== obj.id);
        setOriginalDrivers(newList);
        setLocations(newLocations);
    }

    const setDriverToTask = (selectedDriver, taskId) => {
        const newTasks = [...tasks];
        let selectedTask = {};
        newTasks.forEach(task => {
            if (task.id === taskId) {
                task.assignee = selectedDriver.id;
                selectedTask = task;
            }
        });
        setTasks(newTasks);
        const filterAvailableDrivers = availableDrivers.filter(driver => driver.id !== selectedDriver.id);
        setAvailableDrivers(filterAvailableDrivers);

        // update the relevant driver with connecting it to the task.
        const updatedDrivers = availableDrivers.map(driver => driver.id === selectedDriver.id ? {
            ...driver,
            task: selectedTask.title
        } : {...driver});

        setOriginalDrivers(updatedDrivers);
    }

    const setTaskVisible = (taskId, {target}) => {
        const serializedTasks = tasks.map(task => {
            if (task.id === taskId) {
                task.visible = target.checked;
            }
            return task;
        });
        const mappedLocations = getMappedLocations([...originalDrivers, ...serializedTasks]);

        setTasks(serializedTasks);
        setLocations(mappedLocations);
    }

    const locateDriver = driverId => {
        const driverLocation = originalDrivers.find(x => (x.id === driverId));
        setCenter({lat: parseFloat(driverLocation.latitude), lng: parseFloat(driverLocation.longitude)})
    }

    useEffect(() => {
        const fetchDrivers = async () => {
            try {
                console.log('fetching drivers...');
                const res = await api.getDrivers();
                setOriginalDrivers(res);
                setAvailableDrivers(res);
            } catch (e) {
                console.log('err fetching drivers', e);
                // setError(true);
            }
        }
        const fetchTasks = async () => {
            console.log('fetching tasks...');
            try {
                const res = await api.getTasks(); // assume its a real API fetch req.
                setTasks(res);
            } catch (e) {
                console.log('err fetching tasks', e);
                // setError(true);
            }
        }

        fetchTasks();
        fetchDrivers();

        const isMobile = checkIsMobile();
        setIsMobile(isMobile);
        setLoading(false);
    }, []);

    useEffect(() => {
        const mappedLocations = getMappedLocations([...originalDrivers, ...tasks]);
        setLocations(mappedLocations);
    }, [tasks, originalDrivers]);

    return (<div className="d-flex flex-direction-column padding-5">
        {!loading && <>
            <div className={`margin-x-5 d-flex ${isMobile ? 'flex-direction-column' : ''}`}>
                <Drivers isMobile={isMobile} removeDriver={removeDriver} locateDriver={locateDriver}
                         driversList={originalDrivers}/>
                <Map isMobile={isMobile} locations={locations} center={center}/>
            </div>
            <Tasks setTaskVisible={setTaskVisible}
                   setDriverToTask={setDriverToTask}
                   tasks={tasks}
                   exclude={excludedValues}
                   availableDrivers={availableDrivers}
            />
        </>}
    </div>)
}

export default AppContainer;
