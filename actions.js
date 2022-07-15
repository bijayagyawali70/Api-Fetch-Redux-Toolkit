import { nameFromApi } from "./reducerSlicer";
import axios from "axios";

export const addName = (dispatch) =>{
    axios.get('http://192.168.68.183:3000/user')
    .then(response => {
        // const userDetails = response.data
        // console.log('from api',userDetails)
        dispatch(nameFromApi(response.data))
    })
    .catch(error => console.log(error.message))
}   