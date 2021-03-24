import React, { useState } from "react";
/* import GoogleMapReact from "google-map-react" */

/* import logo from './logo.svg';
import './App.css'; */
/* import SimpleMap from './components/simplemap'; */
import Mapquest from '/Mapquest';
import Miubicacion from './Miubicacion';


function App() {
  // component state
  const [lat, setLat] = useState('6.2518401');
  const [lng, setLng] = useState('-75.563591');

  let markers = [];
  
  //fijar el centro del mapa
  const setCenter = (lat, lng) => {
    setLat(lat);
    setLng(lng);

    window.L.mapquest.Map.getMap('map').setView(new window.L.LatLng(lat,lng),12);
  };

  const addMarker = (lat, lng, title, subtitle) => {
    const marker = window.L.mapquest.textMarker(
      new window.L.LatLng(lat, lng),
      {
        text: title || '',
        subtextl: subtitle || '',
        position: 'right',
        type: 'marker',
        icon: {
          primaryColor: '#a8190f',
          secondaryColor: '#db2c2c',
          size: 'md'
        }
      }
    ).addTo(window.L.mapquest.Map.getMap('map'));
    markers.push(marker);

  };

  return (
    <div className="container-fluid">
      <div className="row pl-3 pr-3 pt-3 pb-3">
        <div className="col-sm-10">
          TrapoRojo.com
        </div>
        <div className="col-sm-2">
          <Miubicacion setCenter = {setCenter} setMarker = {addMarker}/> 
        </div>
      </div>
      <Mapquest
        height="80vh"
        width="100%"
        center={[lat, lng]}
        tileLayer={'map'} //map o dark
        zoom={12}
        apikey="cTOgwm5hh3iATuabR2EENHQRvDClGg9G"
      />
    </div>
  );
}
//apikey de google = AIzaSyC00etRwvVMgUYXGXYgVhEjIJAddWP_uns
//apikey de mapquest = 
export default App;
