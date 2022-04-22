import { configureStore } from "@reduxjs/toolkit"
import axios from "axios"
import { getUsers } from "./UserActions"
import { GET_USERS } from "../Constants"

let mockUsers = [
  {
    company: "Planet Express",
    id: 1,
    name: "Philip J Fry",
    position: "Delivery Boy",
    profile: {
      age: 25,
      gender: "M",
      planet: "Earth",
      species: "Human",
      status: "Alive",
    },
  },
  {
    company: "Planet Express",
    id: 2,
    name: "Turanga Leela",
    position: "Captain",
    profile: {
      age: 25,
      gender: "F",
      planet: "Earth",
      species: "Mutant, Human",
      status: "Alive",
    },
  },
]

describe("#getUsers", () => {
  it("gets the users from endpoint", async () => {
    const postSpy = jest
      .spyOn(axios, "get")
      .mockImplementation(() =>  {return { data: mockUsers }})
    const store = configureStore({
      reducer: function (state = "", action) {
        switch (action.type) {
          case GET_USERS:
            return action.payload
          default:
            return state
        }
      },
    })
    await store.dispatch(getUsers())
    expect(postSpy).toBeCalledWith(
      "https://immense-bastion-95145.herokuapp.com/api/users"
    )
    expect(postSpy).toHaveReturnedWith({'data': mockUsers})
  })
})
