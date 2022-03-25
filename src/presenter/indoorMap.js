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
useEffect(()=>{setContainerPromise(DataSource.getContainers())},[]);

const key = 'room_id';
const [rooms, setRooms]=useState("");
//get distinct rooms from containerTable
useEffect(()=>{if(containers!=null && containers.data!=null){
  setRooms([...new Map(containers.data.map(item =>
    [item[key], item])).values()])
}},[containers]);
/*
const arrayUniqueByKey = [...new Map(containers.map(item =>
  [item[key], item])).values()];*/

console.log("Rooms"+rooms);

return (
<React.Fragment>
  <div>
  {PromiseNoData(promiseContainers, containers, containerError)||
    rooms && <TwoDMap containers={containers.data} rooms={rooms} product={null}></TwoDMap>}
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