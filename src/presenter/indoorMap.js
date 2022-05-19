import React,{useState, useEffect} from "react";
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

return (
<React.Fragment>
  <div>
  {PromiseNoData(promiseContainers, containers, containerError)||
    floors && <TwoDMap containers={containers.data} floors={floors.data} product={null}></TwoDMap>}
  </div>
</React.Fragment>
)
}

export default IndoorMap;