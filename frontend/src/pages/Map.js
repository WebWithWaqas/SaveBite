import React, { useEffect, useState } from 'react'
import http from '../api';
import { MapContainer } from 'react-leaflet/MapContainer'
import {  Marker, Popup } from 'react-leaflet';
import { TileLayer } from 'react-leaflet/TileLayer'
import 'leaflet/dist/leaflet.css';
import pin from "./pin.png";
import L from 'leaflet';



export const Map = () => {
  const [data, setData] = useState([]);
  const position = [31.5, 74.3]

  const iconPerson = new L.Icon({
    iconUrl: pin,
    iconRetinaUrl: pin,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
  });

  useEffect(() => {
    http.get('/v1/posts/all').then(res => {
      console.log(res.data.posts[0]);
      setData(res.data.posts);
    });
  }, [])

  return (
    <div className="Map-div container-fluid p-0">
      
      <MapContainer center={position} zoom={12}scrollWheelZoom={false} icon={iconPerson}>
        <TileLayer 
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {
          data.map((item, index) => {
            return (
              <Marker position={[item.location.coordinates.coordinates[1], item.location.coordinates.coordinates[0]]}>
             
              <Popup>   
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      {item.itemType}
                    </h5>
                  </div>
                  <div class="modal-body">
                    <img src = "food.jpg" className = "img-fluid mb-3" />
                    <p>
                      <b>Name: </b> {item.user.name}<br/>
                      <b>Phone: </b> {item.user.phone} <br/>
                      <b>Email: </b> {item.user.email} <br/>
                    </p>
                  </div>
                </div>
              </div>
              </Popup>
              </Marker>
            )
          })
        }
      </MapContainer>
    </div>
  )
}
