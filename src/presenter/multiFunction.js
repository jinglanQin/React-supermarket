import DataSource from "../api/dataSource";
import React,{useState, useEffect} from "react";
import PromiseNoData from "../view/promiseNoData";
import MultiFunctionsForStaff from "../view/multiFunctionsForStaff";
import ProductDetail from "../view/productDetailForCustomer";
import UpdateProduct from "../view/updateProduct";
import Alert from "../view/alert";
import NavBar from "../view/navBar";
const { default: usePromise } = require("../components/usePromise");

function MultiFunction() {
    const [option, setOption]=useState('');
    const [query, setQuery] = React.useState("");
    const [promise, setPromise] = useState(null);
    const [data, error] = usePromise(promise);
    const [show, setShow]= useState("");
    useEffect(()=> {setPromise(null)},[option]);
    const [values, setValues]= useState({});
    useEffect(()=> {if(data!=null){setValues(data.data)}},[data]);// set default Values to updateProduct
    const [updateRes, SetUpdateRes]=useState(false);

    console.log(data);
    console.log(query);
    console.log(option);
    console.log(error);
    console.log(show);
    console.log("values"+values);
    console.log(updateRes);
    //useEffect(()=> {console.log(values.name)},[values]);



  
    return (
        <React.Fragment>
            <div>
                <NavBar></NavBar>
            </div>

        <div>
            <MultiFunctionsForStaff handleSelect={(option)=>setOption(option)}
                onText={(query)=>setQuery(query)}
                onSearch={()=> setPromise(DataSource.multiFunction(option, query), setShow(option), SetUpdateRes(false))}
            ></MultiFunctionsForStaff>
        </div>

        {option==="#/search"&& "#/search"===show && promise!=null ?(
        <div>
            {PromiseNoData(promise, data, error)||
            (data && <ProductDetail product={data.data}/>)}
        </div>) :(<div></div>)}

        {option==="#/delete" && "#/delete"  ===show && promise!=null  ?(
        <div>
            {PromiseNoData(promise, data, error)||
            (data && <Alert variant={"info"} message={data.data}></Alert>)}
        </div>) :(<div></div>)}

        {option==="#/insert" && "#/insert" ===show && promise!=null ?(
        <div>
            {PromiseNoData(promise, data, error)||
            (data && <Alert variant={"info"} message={data.data}></Alert>)}
        </div>) :(<div></div>)}

        { option==="#/update"&& "#/update"===show && promise!=null  ?(
        <div>
            {PromiseNoData(promise, data, error)||
            (data && <UpdateProduct 
                product={data.data} 
                handleOnChange={(event)=>{
                    setValues(values =>{return {...values, [event.target.name]:event.target.value}})}}
                   // setValues((values) =>{return { "name":event.target.value, "location_x":parseInt(event.target.value) }})}}
                onUpdate={()=>setPromise(DataSource.updateProduct(data.data.upc14 ,values),SetUpdateRes(true), setValues(null))}
                updateRes={updateRes}
                info={values}
                 ></UpdateProduct>)}
        </div>) :(<div></div>)}


      


        </React.Fragment>
        )
    }

export default MultiFunction;