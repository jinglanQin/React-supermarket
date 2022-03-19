import DataSource from "../api/dataSource";
import React,{useState, useEffect} from "react";
import PromiseNoData from "../promiseNoData";
import SearchProductByID from "../view/searchProductByID";
import NavBar from "../view/navBar";
const { default: usePromise } = require("../components/usePromise");
const {default: ProductDetail}= require("../view/productDetailForCustomer");



function SearchProduct() {
    //const [search, setSearch] = useState(null);
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


      /*  PromiseNoData(promise, data, error) || <ProductDetail 
                product={data.data} 
                onText={(query)=>setQuery(query)}
                onSearch={()=> setPromise(DataSource.getProduct(query))}
            />)*/


/*
const[data, setData]= useState(null);
fetch("https://of5p2niqw7.execute-api.eu-north-1.amazonaws.com/getProduct/getProduct?id=test", {
  method: 'GET',

  //mode:'cors',     
  })
  .then(response => response.json())
  .then(data => {
      setData(data);
    console.log('Success:', data); 
  })
  .catch((error) => {
    console.error('Error:', error);
});
console.log('Success:', data); 
if(data!=null){
return (<HomeView 
product={data}
/>)}

*/
}

export default SearchProduct;