
import axios from './httpCommon';
const DataSource = {

    apiCall(endpoint, method, data){
        if(method === "GET"){
            if(data != null){
                //const params = new URLSearchParams(data);
                //console.log(params);
                return axios.get(endpoint+"?"+data);
            } else {
                return axios.get(endpoint);
            }
        } else if(method === "POST"){
            return axios.post(endpoint, data);
        }
    },

    getProduct(){
        return this.apiCall("/getProduct", "GET", "id=test");
    }
}
export default DataSource;