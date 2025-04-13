
// get all user data
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


export const createContactData = createAsyncThunk(
    "contact/createContactData",
    async (data) => {
      const response = await axios.post("http://localhost:5050/createData", data);
      console.log(response);
      
      return response.data;
    }
  );