import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDU5NjZlZjNjODY1ZDkyNGJmMWY1ZDczNWFmOWUxMiIsInN1YiI6IjY0ZTFmMDcwZTE5ZGU5MDBhZGZkNjFjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s8UBvYjpzdrssHLUVZRY3V3fqY7GtL858r_b5O2a6z8";


const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url,params) =>{
    try {
        const {data} = await axios.get(BASE_URL + url, {
            headers,
            params
        })
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}