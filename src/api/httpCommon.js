import axios from "axios";
const instance =  axios.create({
 // withCredentials: true,
  baseURL:  "https://j7nmzer2o7.execute-api.eu-north-1.amazonaws.com/supermarket",
  headers: {
    "Content-type": "application/json"
  }
});

export default instance;