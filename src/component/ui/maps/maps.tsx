import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { number } from 'yup';

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



const Maps: React.FC<props> = ({ coordenadas }: props) => {
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyDpj3dw_Genfha5ciZ336oIbphMdPLuVPI"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={coordenadas}
                zoom={10}
            >
                { }
                <></>
            </GoogleMap>
        </LoadScript>
    )
}

export default Maps