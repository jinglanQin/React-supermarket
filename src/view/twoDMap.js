import React,{useState, useEffect} from "react";
import { MapContainer, TileLayer, Marker, Popup, MapControl,Polygon } from 'react-leaflet'
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';
import { Container } from "react-bootstrap";
import Group from 'react-group';
import { container } from "aws-amplify";

function TwoDMap({containers, floors, products}){
const [width, setWidth] = useState(window.innerWidth-20);
const [height, setHeight]=useState(window.innerHeight-20);
useEffect(() => {
  const handleResize = (() => setWidth(window.innerWidth), setHeight(window.innerHeight));
  window.addEventListener("resize", handleResize);
  return () => {
    window.removeEventListener("resize", handleResize);
  };
});

//add the scale to each floors.
floors.forEach(function (element) {
  element.scale = (element.oppositePoint.match(/\d+/g).map(Number)[0]/(width))
});

    return (
      <Group>
        {floors.map(floor => (
        <Stage key={floor.id} width={width} height={height+250}>
            <Layer key={floor.id} >
                <Text text={"floor "+floor.floorNumber} fontSize={30} />
                  {floor.shape==="rect" ?(
                <Rect
                  key={floor.id}
                  x={floor.centerPoint.match(/\d+/g).map(Number)[0]/floor.scale}
                  y={floor.centerPoint.match(/\d+/g).map(Number)[1]/floor.scale}
                  width={(floor.oppositePoint.match(/\d+/g).map(Number)[0] - floor.centerPoint.match(/\d+/g).map(Number)[0])/floor.scale}
                  height={(floor.oppositePoint.match(/\d+/g).map(Number)[1] - floor.centerPoint.match(/\d+/g).map(Number)[0])/floor.scale}
                  stroke="black"
                  shadowBlur={10}
                />):(<Group></Group>)}

                {floor.shape==="poly"?(
                <Line key={floor.id}
                  x={0}
                  y={0}
                  points={floor.polygonPoints.match(/\d+/g).map(Number).map(x => x/floor.scale)}
                  tension={0}
                  closed
                  stroke="black"
                  shadowBlur={10}
                />):(<Group></Group>)}
                 
                {products===null ?(<Group></Group>):(
                products.data.length>0 ?(
                  products.data.map(product => (product.floor!=null?(
                    product.floor.id===floor.id ? (
                    <Circle key = {product.gtin14} x={product.locationX/floor.scale} 
                  y={product.locationY/floor.scale} radius={5} fill="red" />
                  ):(<Group></Group>)
                  ):(<Group></Group>)))
                  ):(<Group></Group>)
                  )}

                {containers.map(container => (container.floor!=null? ((container.floor.id===floor.id && container.shape==="circ")? (
                <Circle key={container.id} 
                  x={container.centerPoint.match(/\d+/g).map(Number)[0]/floor.scale} 
                  y={container.centerPoint.match(/\d+/g).map(Number)[1]/floor.scale} 
                  radius={container.containerRadius/floor.scale} 
                  stroke="black"  />) :(<Group></Group>)):(<Group></Group>)))}
                  
                {containers.map(container => (container.floor!=null ?((container.floor.id===floor.id && container.shape==="rect")? (
                <Rect key={container.id}
                  x={container.centerPoint.match(/\d+/g).map(Number)[0]/floor.scale}
                  y={container.centerPoint.match(/\d+/g).map(Number)[1]/floor.scale}
                  width={(container.oppositePoint.match(/\d+/g).map(Number)[0] - container.centerPoint.match(/\d+/g).map(Number)[0])/floor.scale}
                  height={(container.oppositePoint.match(/\d+/g).map(Number)[1] - container.centerPoint.match(/\d+/g).map(Number)[1])/floor.scale}
                  stroke="black"
                  shadowBlur={10}
                />) :(<Group></Group>)):(<Group></Group>)))}

                 {containers.map(container => (container.floor!=null ? ((container.floor.id===floor.id && container.shape==="poly")? (
                <Line key={container.id}
                  x={0}
                  y={0}
                  points={container.polygonPoints.match(/\d+/g).map(Number).map(x => x/floor.scale)}
                  tension={0}
                  closed
                  stroke="black"
                  shadowBlur={10}
                />) :(<Group></Group>)):(<Group></Group>)))}
              </Layer>
               
            </Stage>
            ))}
           </Group>

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