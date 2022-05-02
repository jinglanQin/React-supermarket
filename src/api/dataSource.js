
import axios from './httpCommon';
const DataSource = {

    printTime(param){
        const d= new Date();
        console.log("Time for the quering : Start time for  "+param + " is : "+ d.getTime());
    },

    handleHTTPError(response) {
        console.log(response.status===502);
        if (response.status===200)
            return response;
        throw Error(response.status + " " + response.statusText);
    },

    apiCall(endpoint, method, data){
        if(method === "GET"){
            if(data != null){
                return axios.get(endpoint+data);
            } else {
                return axios.get(endpoint);
            }
        } else if(method === "POST"){
            return axios.post(endpoint, data);
        }
        else if(method==="DELETE"){
            return axios.delete(endpoint + data);
        }
    },
  
    getProductByName(param){
        return this.apiCall("/getProductByName"+"?name=", "GET", param).then(response => this.handleHTTPError(response))
        .then(response => response);
    },

    getProductByGtin14(param){
        return this.apiCall("/getProductByGtin14"+"?id=", "GET", param).then(response => this.handleHTTPError(response))
        .then(response => response);
    },

    deleteProduct(param){
        return this.apiCall("/deleteProductByGtin14"+"?id=", "DELETE", param).then(response => this.handleHTTPError(response)).then(response => response);
    },
    
    insertProduct(param, requestHeader){
        return this.apiCall("/insertProduct"+"?floorNumber="+requestHeader, "POST", param).then(response => this.handleHTTPError(response))
        .then(response => response);
    },

    multiFunction(option, param, object,requestHeader){
        this.printTime(option+ " "+ object);
        if(object==="#/product"){
            if(option === "#/search"){
                return this.getProductByGtin14(param);
            }
            else if(option==="#/delete") {
                return this.deleteProduct(param);
            }
            else if(option ==="#/insert"){
                console.log(param);
                console.log(requestHeader);
                return this.insertProduct(param, requestHeader);
            }
            else if(option==="#/update"){
                return this.getProductByGtin14(param);
            }
        }

        if(object==="#/container"){
            if(option==="#/insert"){
                return this.insertContainer(param, requestHeader);
            }
            else if(option==="#/search"){
                return this.getContainer(param);
            }
            else if(option==="#/delete"){
                return this.deleteContainer(param);
            }
        }

        if(object==="#/floor"){
            if(option === "#/search"){
                return this.getFloor(param);
            }
            
            else if(option==="#/delete") {
                return this.deleteFloor(param);
            }
            else if(option ==="#/insert"){
                return this.insertFloor(param);
            }/*
            else if(option==="#/update"){
                return ;
            }*/
        }
    },

    updateProduct( body){
        return axios.put("/updateProduct", body).then(response => this.handleHTTPError(response))
        .then(response => response);
    },

    getAllContainers(){
        return this.apiCall("/getAllContainers", "GET", null).then(response => this.handleHTTPError(response))
        .then(response => response);
    },

    insertContainer(param, requestHeader){
        this.printTime("insert container");
        return this.apiCall("/insertContainer"+"?floorNumber="+requestHeader, "POST", param).then(response => this.handleHTTPError(response))
        .then(response => response);
    },
    getContainer(param){
        return this.apiCall("/getContainerByName?id=", "GET", param).then(response => this.handleHTTPError(response))
        .then(response => response);
    },
   
    deleteContainer(param){
        return this.apiCall("/deleteContainerByName?id=", "DELETE", param).then(response => this.handleHTTPError(response)).then(response => response);
    },
    insertFloor(param){
        this.printTime("insert floor");
        return this.apiCall("/insertFloor", "POST", param).then(response => this.handleHTTPError(response))
        .then(response => response);
    },
    getFloor(param){
        return this.apiCall("/getFloorByFloorNumber?id=", "GET", param).then(response => this.handleHTTPError(response))
        .then(response => response);
    },
    deleteFloor(param){
        return this.apiCall("/deleteFloorByFloorNumber?id=", "DELETE", param).then(response => this.handleHTTPError(response)).then(response => response);

    },
    getAllFloors(){
        return this.apiCall("/getAllFloors", "GET", null).then(response => this.handleHTTPError(response))
        .then(response => response);
    }



}
export default DataSource;