import React, { useEffect, useState, useRef, memo } from 'react';
import isEqual from 'lodash/isEqual';
import Title from '../common/Title';
import DriversList from './DriversList';
import ActionButton from '../common/ActionButton';
import Input from '../common/Input';
import orderBy from 'lodash/orderBy';
import { debounce } from '../utils/utilsFunctions';

const Drivers = memo(({locateDriver, removeDriver, driversList = [], isMobile}) => {
    const [nameSortType, setNameSortType] = useState('asc');
    const [ageSortType, setAgeSortType] = useState('asc');
    const [drivers, setDrivers] = useState([]);
    const prevList = usePrevious(driversList);

    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    }

    useEffect(() => {
        if (!isEqual(driversList, prevList)) {
            setDrivers(driversList)
        }
    }, [driversList])

    const getSortingType = type => {
        if (type === 'age') {
            return ageSortType === 'asc' ? 'desc' : 'asc';
        } else {
            return nameSortType === 'asc' ? 'desc' : 'asc';
        }
    }

    const sortDrivers = sortProperty => {
        const sortingType = getSortingType(sortProperty);
        const sortedDrivers = orderBy([...drivers], [sortProperty], [sortingType]);
        setDrivers(sortedDrivers);

        // set state for the current sort type and property.
        if (sortProperty === 'age') {
            setAgeSortType(sortingType);
        } else {
            setNameSortType(sortingType);
        }
    }

    const searchDriver = debounce(({ target: { value }}) => {
        let emptyString = /^ *$/.test(value);
        if (emptyString) {
            setDrivers(driversList);
        } else {
            const filteredDrivers = drivers.filter(obj => {
                const matchFirstName = new RegExp(value, 'gi').test(obj.name.first);
                const matchLastName = new RegExp(value, 'gi').test(obj.name.last);
                return (matchFirstName || matchLastName);
            });
            setDrivers(filteredDrivers);
        }
    }, 500);

    return (
        <div className={`d-flex flex-direction-column border-r border-blue ${isMobile ? 'margin-b-4 w-100':'w-40'}`} style={{height: '80vh'}}>
            <Title bgColor="blue" text="Drivers list"/>
            <div className="padding-4 h-100">
                <div className="margin-b-2 d-flex justify-between align-center">
                    <div>
                        <ActionButton classes="flat-btn margin-r-1" clickHandler={sortDrivers} type="name.first"
                                      text="sort by name"/>
                        <ActionButton classes="flat-btn" clickHandler={sortDrivers} type="age" text="sort by age"/>
                    </div>
                    <Input placeholder="Search driver..." onChangeHandler={searchDriver}/>
                </div>
                {!!drivers.length &&
                <DriversList locateDriver={locateDriver} removeDriver={removeDriver} drivers={drivers}/>}
            </div>
        </div>
    )
})

export default Drivers;