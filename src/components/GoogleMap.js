import React, {memo} from 'react';
import GoogleMapReact from "google-map-react";
import Icon from './common/Icon';

const Map = memo(({ locations = [], center, isMobile }) => {
        return (<div className="margin-x-3" style={{height: '80vh', width: isMobile ? '100%' : '70%'}}>
                <GoogleMapReact
                    // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
                    defaultZoom={1}
                    center={center}
                >
                    {
                        !!locations && locations.map(location => !!location.visible && <Icon
                            key={`${location.lat}${location.lng}`}
                            text={location.text}
                            type={location.type}
                            lng={parseFloat(location.lng)}
                            lat={parseFloat(location.lat)}
                        />)
                    }
                </GoogleMapReact>
            </div>
        )
    }
)

export default Map;
