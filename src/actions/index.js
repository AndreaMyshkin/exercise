import axios from "axios";

const apiMenu = 'https://cors-anywhere.herokuapp.com/https://canastarosa.com/services/api/v1/market/categories/'


export const menu = () =>{
    const request = axios.get(apiMenu)
                    .then(res=> res.data)
    return{
        type: 'GET_MENU',
        payload: request
    }
}