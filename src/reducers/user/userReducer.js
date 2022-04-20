import { GET_USERS } from "../../actions/Constants"
const initialState = {}
const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERS: {
      return {
        ...state,
        users: payload,
      }
    }
    default:
      return state
  }
}

export default userReducer
