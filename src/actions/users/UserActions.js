import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { GET_USERS } from "../Constants"

export const getUsers = createAsyncThunk(
  "getUsers",
  async (_, { dispatch }) => {
    try {
      const { data } = await axios.get(
        "https://immense-bastion-95145.herokuapp.com/api/users"
      )
      dispatch({
        type: GET_USERS,
        payload: data.users,
      })
    } catch (error) {
      console.log(error)
    }
  }
)
