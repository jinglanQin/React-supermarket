import axios from "axios";
const instance =  axios.create({
 // withCredentials: true,
  baseURL:  "https://of5p2niqw7.execute-api.eu-north-1.amazonaws.com/noKey",
  headers: {
    "Content-type": "application/json"
  }
});

export default instance;