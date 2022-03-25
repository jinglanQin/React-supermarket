import React,{useState, useEffect} from "react";
import { MapContainer, TileLayer, Marker, Popup, MapControl,Polygon } from 'react-leaflet'
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';
import { Container } from "react-bootstrap";

function TwoDMap({containers, rooms, product}){
const [width, setWidth] = useState(window.innerWidth);
const [height, setHeight]=useState(window.innerHeight);
console.log(rooms.room_centerLocation_x);
useEffect(() => {
  const handleResize = (() => setWidth(window.innerWidth), setHeight(window.innerHeight));
  window.addEventListener("resize", handleResize);
  return () => {
    window.removeEventListener("resize", handleResize);
  };
});
console.log("new"+width);
console.log("new"+height);

//add the scale to each rooms.
rooms.forEach(function (element) {
  element.scale = (element.room_opposite_x/width)
});

const test= [{name:"one", x: "40", y:"20",width:"10", height:"20"}, {name:"two",x:"60",y:"20",width:"10", height:"20"}];

    return (

        <Stage width={window.innerWidth} height={window.innerHeight}> 
              {rooms.map(room => (
                        
            <Layer key={room.room_id} >
                <Text text="" fontSize={10} />
                <Rect
                key={room.room_id}
                  x={room.room_centerLocation_x/room.scale}
                  y={room.room_centerLocation_y/room.scale}
                  width={(room.room_opposite_x-room.room_centerLocation_x)/room.scale}
                  height={(room.room_opposite_y-room.room_centerLocation_y)/room.scale}
                  stroke="black"
                  shadowBlur={10}
                />
                {product!=null ? (
                  <Circle x={product.data.location_x} y={product.data.location_y} radius={5} fill="red" />):(<div></div>)}

        
                {containers.map(container => (container.room_id===room.room_id? (
                <Rect key={container.id}
                  x={container.centerLocation_x/room.scale}
                  y={container.centerLocation_y/room.scale}
                  width={(container.opposite_x - container.centerLocation_x)/room.scale}
                  height={(container.opposite_y - container.centerLocation_y)/room.scale}
                  stroke="black"
                  shadowBlur={10}
                />) :(<div></div>)))}
 
              </Layer>))}
            </Stage>
 
                )    
}

export default TwoDMap;


/*
            <Circle x={200} y={100} radius={50} fill="green" />
             <Line
                  x={200}
                  y={300}
                  points={[0, 0, 100, 0, 100, 100]}
                  tension={0.5}
                  closed
                  stroke="black"
                  fillLinearGradientStartPoint={{ x: -50, y: -50 }}
                  fillLinearGradientEndPoint={{ x: 50, y: 50 }}
                />
                
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