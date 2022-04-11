import React,{useState, useEffect} from "react";
import { MapContainer, TileLayer, Marker, Popup, MapControl,Polygon } from 'react-leaflet'
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';
import TwoDMap from "../view/twoDMap";
import DataSource from "../api/dataSource"
import PromiseNoData from "../view/promiseNoData";
const { default: usePromise } = require("../components/usePromise");

function IndoorMap () {

const [promiseContainers, setContainerPromise]=React.useState(null);
const [containers, containerError]= usePromise(promiseContainers);
const [promiseFloors, setFloorsPromise]=React.useState(null);
const [floors, setFloors]= usePromise(promiseFloors);
useEffect(()=>{setContainerPromise(DataSource.getAllContainers())},[]);
useEffect(()=>{setFloorsPromise(DataSource.getAllFloors()) },[]);

//const key = 'floor_id';
//get distinct rooms from containerTable
/*
useEffect(()=>{if(containers!=null && containers.data!=null){
  setFloors([...new Map(containers.data.map(item =>
    [item[key], item])).values()])
}},[containers]);*/
/*
const arrayUniqueByKey = [...new Map(containers.map(item =>
  [item[key], item])).values()];*/

console.log("floors  "+floors);

return (
<React.Fragment>
  <div>
  {PromiseNoData(promiseContainers, containers, containerError)||
    floors && <TwoDMap containers={containers.data} floors={floors} product={null}></TwoDMap>}
  </div>
</React.Fragment>
)
}
/*
<MapContainer center={[51.505, -0.09]} zoom={10} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
            </Marker>
          </MapContainer>*/

          /*
Triangel
              <Line
          x={0}
          y={0}
          points={[0, 0, 100, 0, 100, 100]}
          tension={0}
          closed
          stroke="black"
          fillLinearGradientStartPoint={{ x: -50, y: -50 }}
          fillLinearGradientEndPoint={{ x: 50, y: 50 }}
          fillLinearGradientColorStops={[0, 'red', 1, 'yellow']}
        />

          */
export default IndoorMap;