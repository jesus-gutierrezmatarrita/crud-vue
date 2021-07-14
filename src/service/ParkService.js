import axios from "axios";

export default class ParkService {
    url = "http://localhost:9000/api/v1/";
    
    getAll() {
        return axios.get(this.url + "listar");
    }
}