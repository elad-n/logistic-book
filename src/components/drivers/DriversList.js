import React, {memo} from 'react';
import Driver from './Driver';

const DriversList = memo(({drivers, removeDriver, locateDriver}) => {
    return <div className="drivers-list-container">
        {!!drivers.length && drivers.map((item, i) => <Driver
            key={item.id}
            removeDriver={removeDriver}
            locateDriver={() => locateDriver(item.id)}
            itemClass={drivers.length !== i + 1 ? 'margin-b-1' : ''}
            id={item.id}
            name={item.name}
            age={item.age}
            task={item.task}
            location={item.location}
            picture={item.picture}
            phone={item.phone}
        />)
        }
    </div>
})

export default DriversList;