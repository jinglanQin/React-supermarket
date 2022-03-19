
import axios from './httpCommon';
const DataSource = {

    handleHTTPError(response) {
        console.log(response.status===502);
        if (response.status===200)
            return response;
        throw Error(response.status + " " + response.statusText);
    },

    apiCall(endpoint, method, data){
        if(method === "GET"){
            if(data != null){
                //const params = new URLSearchParams(data);
                //console.log(params);
                return axios.get(endpoint+"?"+"id="+data);
            } else {
                return axios.get(endpoint);
            }
        } else if(method === "POST"){
            return axios.post(endpoint, data);
        }
        // ? put
        else if(method==="PUT"){
            return axios.put(endpoint, data);
        }
        else if(method==="DELETE"){
            return axios.delete(endpoint + "?"+"id="+data);
        }
        else if(method==="POST"){
            return axios.post(endpoint,data);// data is request body
        }
        else if(method==="UPDATE"){
            
        }
    },

    getProduct(param){
        return this.apiCall("/getProduct", "GET", param).then(response => this.handleHTTPError(response))
        .then(response => response);
    },

    deleteProduct(param){
        return this.apiCall("/deleteProduct", "DELETE", param).then(response => this.handleHTTPError(response)).then(response => response);;
    },

    insertProduct(param){
        return this.apiCall("/insertProduct", "POST", param);
    },

    multiFunction(option, param){
        if(option === "#/search"){
            return this.getProduct(param);
        }
        else if(option==="#/delete") {
            return this.deleteProduct(param);
        }
        else if(option ==="#/insert"){
            return this.insertProduct(param);
        }
        else if(option==="#/update"){
            return this.getProduct(param);
        }
    }

  
}
export default DataSource;