import DataSource from "../api/dataSource";
import React,{useState, useEffect} from "react";
import PromiseNoData from "../view/promiseNoData";
import SearchProductByID from "../view/searchProductByID";
import NavBar from "../view/navBar";
const { default: usePromise } = require("../components/usePromise");
const {default: ProductDetail}= require("../view/productDetailForCustomer");

function SearchProduct() {
    const [query, setQuery] = React.useState("");
    const [promise, setPromise]=React.useState(null);
   //useEffect(()=> {setPromise(DataSource.getProduct(query))},[query])
    //useEffect(() => { setSearch(DataSource.getProduct())}, []);
    const [data, error] = usePromise(promise);
    console.log(data);
    console.log(query);
    
    return (
        <React.Fragment>
            <div>
                <NavBar></NavBar>
            </div>
                
            <div>
            <SearchProductByID 
                onText={(query)=>setQuery(query)}
                onSearch={()=> setPromise(DataSource.getProduct(query))}
                />
            </div>
            
            {data!=null ?(
            <div>
                {PromiseNoData(promise, data, error)||
                (data && <ProductDetail product={data.data}/>)}
            </div>) :(<div></div>)} 
            </React.Fragment>)
}

export default SearchProduct;