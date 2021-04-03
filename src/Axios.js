import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-ecommerce--clone-78d81.cloudfunctions.net/api'
});

export default instance;

//http://localhost:5001/ecommerce--clone-78d81/us-central1/api

