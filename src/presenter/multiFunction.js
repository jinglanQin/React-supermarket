import DataSource from "../api/dataSource";
import React,{useState, useEffect} from "react";
import PromiseNoData from "../promiseNoData";
import MultiFunctionsForStaff from "../view/multiFunctionsForStaff";
import ProductDetail from "../view/ProductDetail";
const { default: usePromise } = require("../components/usePromise");

function MultiFunction() {
    const [option, setOption]=useState('');
    const [query, setQuery] = React.useState("");
    const [promise, setPromise] = useState(null);
    const [data, error] = usePromise(promise);
    console.log(data);
    console.log(option);
    //useEffect(()=> {setPromise(DataSource.multiFunction(option, query))},[option, query])

   /* const handleSelect=(e)=>{
      console.log(e);
      setValue(e)
    }*/

    return (
        <React.Fragment>
        <div>
            <MultiFunctionsForStaff handleSelect={(option)=>setOption(option)}
                onText={(query)=>setQuery(query)}
                onSearch={()=> setPromise(DataSource.multiFunction(option, query))}
            ></MultiFunctionsForStaff>
        </div>

        {data!=null && option==="#/search" ?(
        <div>
            {PromiseNoData(promise, data, error)||
            (data && <ProductDetail product={data.data}/>)}
        </div>) :(<div></div>)}

        {data!=null && option==="#/delete" ?(
        <div>
            {PromiseNoData(promise, data, error)||
            (data && <div>{data}</div>)}
        </div>) :(<div></div>)}


        </React.Fragment>
        )
    }

export default MultiFunction;