import axios from "axios";
import { getUserFromLocalStorage } from "./localStorage";


export const customFetch = axios.create({
    baseURL : `https://address-book-system.onrender.com/api/v1`
})

customFetch.interceptors.request.use(
    (config) => {
      const user = getUserFromLocalStorage();
      if (user) {
        config.headers['Authorization'] = `Bearer ${user.access_token}`;
        
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  export const  checkForUnauthorizedResponse = (error,thunkAPI) =>{
    if (error.response.status === 401) {
      thunkAPI.dispatch(clearStore());
      return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }

export default customFetch