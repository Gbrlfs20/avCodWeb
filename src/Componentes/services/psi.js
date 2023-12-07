import axios from "axios";

const psiAPI = axios.create({ 
    baseURL: "http://localhost:8000/psi"
    });

    async function getPsi(){

        const response = await psiAPI.get('/')
        
        return response.data
    }


    export { getPsi }