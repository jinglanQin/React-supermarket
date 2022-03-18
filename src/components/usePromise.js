import React from 'react';

function usePromise(promise) {  
   // console.log(JSON.stringify(promise));
    
    const [data, setData]= React.useState(null);
    const [error, setError]=React.useState(null);
    React.useEffect(function(){ 
        setData(null); 
        setError(null);
        if(promise != null)
            promise.then(dt => setData(dt)).catch(er => setError(er));
        }, [promise]); 
        console.log(data);
        console.log(error);
     return [data, error];
}
export default usePromise;