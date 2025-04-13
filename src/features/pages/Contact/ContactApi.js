
// get all user data
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import.meta.env.VITE_VENDER_API_BASE_URL



export const createContactData = createAsyncThunk(
    "contact/createContactData",
    async (data) => {
      const response = await axios.post(`${import.meta.env.VITE_VENDER_API_BASE_URL}/createData`, data);
      console.log(response);
      
      return response.data;
    }
  );