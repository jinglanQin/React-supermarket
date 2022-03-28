import React,{useState, useEffect} from "react";
import { MapContainer, TileLayer, Marker, Popup, MapControl,Polygon } from 'react-leaflet'
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';
import { Container } from "react-bootstrap";

function TwoDMap({containers, floors, product}){
const [width, setWidth] = useState(window.innerWidth-20);
const [height, setHeight]=useState(window.innerHeight-20);

useEffect(() => {
  const handleResize = (() => setWidth(window.innerWidth), setHeight(window.innerHeight));
  window.addEventListener("resize", handleResize);
  return () => {
    window.removeEventListener("resize", handleResize);
  };
});
console.log("new"+width);
console.log("new"+height);

//add the scale to each floors.
floors.forEach(function (element) {
  element.scale = (element.floor_oppositePoint.match(/\d+/g).map(Number)[0]/width)
});
const numbers="0,0,100,20,10,20";
const test= [{name:"one", x: "40", y:"20",width:"10", height:"20"}, {name:"two",x:"60",y:"20",width:"10", height:"20"}];

    return (
      <div>
        {floors.map(floor => (
        <Stage key={floor.floor_id} width={width} height={height}>
                        
            <Layer key={floor.floor_id} >
                <Text text={"floor"+floor.floor_id} fontSize={30} />
                  {floor.shapeOfFloor==="rect" ?(
                <Rect
                  key={floor.floor_id}
                  x={floor.floor_centerPoint.match(/\d+/g).map(Number)[0]/floor.scale}
                  y={floor.floor_centerPoint.match(/\d+/g).map(Number)[1]/floor.scale}
                  width={(floor.floor_oppositePoint.match(/\d+/g).map(Number)[0] - floor.floor_centerPoint.match(/\d+/g).map(Number)[0])/floor.scale}
                  height={(floor.floor_oppositePoint.match(/\d+/g).map(Number)[1] - floor.floor_centerPoint.match(/\d+/g).map(Number)[0])/floor.scale}
                  stroke="black"
                  shadowBlur={10}
                />):(<div></div>)}

                {floor.shapeOfFloor==="poly"?(
                <Line key={floor.floor_id}
                  x={0}
                  y={0}
                  points={floor.floor_polygonPoints.match(/\d+/g).map(Number).map(x => x/floor.scale)}
                  tension={0}
                  closed
                  stroke="black"
                  shadowBlur={10}
                />):(<div></div>)}
                
                {product!=null && product.data.floor_id===floor.floor_id ? (
                <Circle key = {product.upd14} x={product.data.location_x/floor.scale} 
                  y={product.data.location_y/floor.scale} radius={5} fill="red" />):(<div></div>)}

                {containers.map(container => ((container.floor_id===floor.floor_id && container.shapeOfContainer==="circ")? (
                <Circle key={container.id} 
                  x={container.containerCenterPoint.match(/\d+/g).map(Number)[0]/floor.scale} 
                  y={container.containerCenterPoint.match(/\d+/g).map(Number)[1]/floor.scale} 
                  radius={container.radiusOfContainer/floor.scale} 
                  
                  stroke="black"  />) :(<div></div>)))}
        
                {containers.map(container => (container.floor_id===floor.floor_id && container.shapeOfContainer==="rect"? (
                <Rect key={container.id}
                 text={container.name}
                  x={container.containerCenterPoint.match(/\d+/g).map(Number)[0]/floor.scale}
                  y={container.containerCenterPoint.match(/\d+/g).map(Number)[1]/floor.scale}
                  width={(container.containerOppositePoint.match(/\d+/g).map(Number)[0] - container.containerCenterPoint.match(/\d+/g).map(Number)[0])/floor.scale}
                  height={(container.containerOppositePoint.match(/\d+/g).map(Number)[1] - container.containerCenterPoint.match(/\d+/g).map(Number)[1])/floor.scale}
                  stroke="black"
                  shadowBlur={10}
                />) :(<div></div>)))}

                 {containers.map(container => (container.floor_id===floor.floor_id && container.shapeOfContainer==="poly"? (
                <Line key={container.id}
                  x={0}
                  y={0}
                  points={container.container_polygonPoints.match(/\d+/g).map(Number).map(x => x/floor.scale)}
                  tension={0}
                  closed
                  stroke="black"
                  shadowBlur={10}
                />) :(<div></div>)))}
              </Layer>
            </Stage>
            ))}
           </div>

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