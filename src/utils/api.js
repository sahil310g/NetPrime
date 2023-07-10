import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3';
const access_token = import.meta.env.VITE_APP_ACCESS_TOKEN;

const headers = {
    Authorization : "bearer "+ access_token
};

export const fetchDataFromApi = async (url, params) =>{
    try {
        const {data} = await axios.get(BASE_URL+url+`?api_key=12c2b1517285310c4ee756b90b9210a3&language=en-US`, {
            headers, params
        })

        return data;

    } catch(err){
        console.log(err);
        return(err);
    }
}

// export const fetchDataFromApi = async (url) => {
//     fetch(BASE_URL + url + `?api_key=12c2b1517285310c4ee756b90b9210a3&language=en-US`)

//     return data;
// }