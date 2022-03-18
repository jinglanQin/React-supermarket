import DataSource from "../api/dataSource";
import React,{useState, useEffect} from "react";
import PromiseNoData from "../promiseNoData";
const { default: usePromise } = require("../components/usePromise");
const {default: HomeView}= require("../view/HomeView");

function SearchProduct() {
    

    const [search, setSearch] = useState(null);

    useEffect(() => { setSearch(DataSource.getProduct())}, []);

    const [data, error] = usePromise(search);
    console.log(data);
    
    return (PromiseNoData(search, data, error) || <HomeView 
                product={data.data}
            />)


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