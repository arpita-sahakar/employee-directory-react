import axios from "axios";

export default {
    fetchEmployees : function(){
        return axios.get("https://randomuser.me/api?results=30");
    }
}