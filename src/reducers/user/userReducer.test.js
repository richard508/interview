import reducer from "./userReducer"
import { GET_USERS } from "../../actions/Constants"

beforeEach(() => {})
const mockUsers = [
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

describe("GET_USERS", () => {
  it("sets the users", () => {
    const action = {
      type: GET_USERS,
      payload: mockUsers,
    }
    const newState = reducer({}, action)
    expect(newState).toEqual(
      expect.objectContaining({
        users: mockUsers,
      })
    )
  })
})

it("return the default state if state is undefined", () => {
  const newState = reducer(undefined, { type: "WHATEVER" })
  expect(newState).toEqual({})
})

it("return the current state if no action matches", () => {
  const state = { test: 'state' }
  const newState = reducer(state, { type: "UNKOWN" })
  expect(newState).toEqual(state)
})
