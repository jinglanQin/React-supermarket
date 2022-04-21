import DataSource from "../api/dataSource";
import React,{useState, useEffect} from "react";
import PromiseNoData from "../view/promiseNoData";
import MultiFunctionsForStaff from "../view/multiFunctionsForStaff";
import ProductDetail from "../view/productDetailForStaff";
import UpdateProduct from "../view/updateProduct";
import ContainerDetail from "../view/containerDetail";
import Alert from "../view/alert";
import NavBar from "../view/navBar";
import FloorDetail from "../view/floorDetail";
import { Object } from "core-js";
const { default: usePromise } = require("../components/usePromise");

function MultiFunction() {


    const [option, setOption]=useState("Select Method");
    const [object, setObject]=useState("Select Object");
    const [query, setQuery] = React.useState("");
    const [promise, setPromise] = useState(null);
    const [data, error] = usePromise(promise);
    const [show, setShow]= useState("");
    const [header, setHeader]= useState("");
    useEffect(()=> {setPromise(null)},[option, object]);
    const [values, setValues]= useState({});
    useEffect(()=> {if(data!=null){setValues(data.data)}},[data]);// set default Values to updateProduct
    const [updateRes, SetUpdateRes]=useState(false);
    console.log(header);
    console.log(data);
    console.log(query);
    console.log(option);
    console.log(error);
    console.log(show);
    console.log("values"+values);
    console.log(updateRes);
    console.log("object"+object);
    //useEffect(()=> {console.log(values.name)},[values]);

    return (
        <React.Fragment>
            <div>
                <NavBar></NavBar>
            </div>

        <div>
            <MultiFunctionsForStaff option={option} object={object}
            handleSelect={(option)=>setOption(option)}
                OnSelectObject={(option)=>setObject(option)}
                onText={(query)=>setQuery(query)}
                onSearch={()=> setPromise(DataSource.multiFunction(option, query, object,header), setShow(option), SetUpdateRes(false))}
                header={(header)=>setHeader(header)}
                 
            ></MultiFunctionsForStaff>
        </div>

        {option==="#/search"&& "#/search"===show && object==="#/product" && promise!=null ?(
        <div>
            {PromiseNoData(promise, data, error)||
            (data && <ProductDetail product={data.data}/>)}
        </div>) :(<div></div>)}

        {option==="#/delete" && "#/delete" ===show && object==="#/product" && promise!=null  ?(
        <div>
            {PromiseNoData(promise, data, error)||
            (data && <Alert variant={"info"} message={data.data}></Alert>)}
        </div>) :(<div></div>)}

        {option==="#/insert" && "#/insert" ===show && object==="#/product" && promise!=null ?(
        <div>
            {PromiseNoData(promise, data, error)||
            (data && <Alert variant={"info"} message={data.data}></Alert>)}
        </div>) :(<div></div>)}

        { option==="#/update"&& "#/update"===show && object==="#/product"&& promise!=null  ?(
        <div>
            {PromiseNoData(promise, data, error)||
            (data && <UpdateProduct 
                product={data.data} 
                handleOnChange={(event)=>{
                    setValues(values =>{return {...values, [event.target.name]:event.target.value}})}}
                   // setValues(prevValue=>({data:{...value, [event.target.name]:event.target.value}}))}}
                onUpdate={()=>setPromise(DataSource.updateProduct(values),SetUpdateRes(true), setValues(null))}
                updateRes={updateRes}
                info={values}
                 ></UpdateProduct>)}
        </div>) :(<div></div>)}


        {option==="#/search"&& "#/search"===show && object==="#/container" && promise!=null ?(
        <div>
            {PromiseNoData(promise, data, error)||
            (data && <ContainerDetail container={data.data}/>)}
        </div>) :(<div></div>)}


        {option==="#/insert" && "#/insert" ===show && object==="#/container" && promise!=null ?(
        <div>
            {PromiseNoData(promise, data, error)||
            (data && <Alert variant={"info"} message={data.data}></Alert>)}
        </div>) :(<div></div>)}

        {option==="#/delete" && "#/delete" ===show && object==="#/container" && promise!=null  ?(
        <div>
            {PromiseNoData(promise, data, error)||
            (data && <Alert variant={"info"} message={data.data}></Alert>)}
        </div>) :(<div></div>)}

        {option==="#/insert" && "#/insert" ===show && object==="#/floor" && promise!=null ?(
        <div>
            {PromiseNoData(promise, data, error)||
            (data && <Alert variant={"info"} message={data.data}></Alert>)}
        </div>) :(<div></div>)}
        {option==="#/search"&& "#/search"===show && object==="#/floor" && promise!=null ?(
        <div>
            {PromiseNoData(promise, data, error)||
            (data && <FloorDetail floor={data.data}/>)}
        </div>) :(<div></div>)}

        {option==="#/delete" && "#/delete" ===show && object==="#/floor" && promise!=null  ?(
        <div>
            {PromiseNoData(promise, data, error)||
            (data && <Alert variant={"info"} message={data.data}></Alert>)}
        </div>) :(<div></div>)}




    

        </React.Fragment>
        )
    }

export default MultiFunction;