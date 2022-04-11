import DataSource from "../api/dataSource";
import React,{useState, useEffect} from "react";
import PromiseNoData from "../view/promiseNoData";
import SearchProductByName from "../view/searchProductByName";
import NavBar from "../view/navBar";
import TwoDMap from "../view/twoDMap";
const { default: usePromise } = require("../components/usePromise");
const {default: ProductDetail}= require("../view/productDetailForCustomer");

function SearchProduct() {
    const [query, setQuery] = React.useState("");
    const [promise, setPromise]=React.useState(null);
    const [data, error] = usePromise(promise);
    console.log(data);
    console.log(query);

    const [promiseContainers, setContainerPromise]=React.useState(null);
    const [containers, containerError]= usePromise(promiseContainers);
    useEffect(()=>{setContainerPromise(DataSource.getAllContainers())},[]);

    const [promiseFloors, setFloorsPromise]=React.useState(null);
    const [floors, setFloors]= usePromise(promiseFloors);
    useEffect(()=>{setFloorsPromise(DataSource.getAllFloors()) },[]);
/*
    const key = 'floor_id';
    const [floors, setFloors]=useState("");
    //get distinct floors from containerTable
    useEffect(()=>{if(containers!=null && containers.data!=null){
    setFloors([...new Map(containers.data.map(item =>
    [item[key], item])).values()])
    }},[containers]);*/
    
    return (
        <React.Fragment>
            <div>
                <NavBar></NavBar>
            </div>
                
            <div>
            <SearchProductByName
                onText={(query)=>setQuery(query)}
                onSearch={()=> setPromise(DataSource.getProductByName(query))}
                />
            </div>
        
            <div>
                {PromiseNoData(promise, data, error)||
                (data && <ProductDetail product={data.data}/>)}
            </div>
            
            {PromiseNoData(promiseContainers, containers, containerError)||
            floors && <TwoDMap containers={containers.data} floors={floors.data} product={data}></TwoDMap>}
 
            </React.Fragment>)

}

export default SearchProduct;