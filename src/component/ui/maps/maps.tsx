import React, { CSSProperties, useMemo } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import classe from './maps.module.css'

const containerStyle = {
    width: '300px',
    height: '300px'
};


type props = {
    coordenadas: {
        lat: number
        lng: number
    }

}

const inputStyle: CSSProperties = {
    boxSizing: `border-box`,
    border: `1px solid transparent`,
    width: `400px`,
    height: `410px`,
    padding: `0 12px`,
    borderRadius: `3px`,
    boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
    fontSize: `14px`,
    outline: `none`,
    textOverflow: `ellipses`,
    position: 'absolute',
}


const Maps: React.FC<props> = ({ coordenadas }: props) => {
    const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyDpj3dw_Genfha5ciZ336oIbphMdPLuVPI"
        >
            <div className='map'>
                <div className={classe.map_container}>
                    <GoogleMap
                        mapContainerStyle={inputStyle}
                        center={coordenadas}
                        zoom={10}
                    >
                        <Marker position={center} />
                    </GoogleMap>
                </div>
            </div>
        </LoadScript>
    )
}

export default Maps