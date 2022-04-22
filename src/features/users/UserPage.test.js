import { shallow } from "enzyme/build"
import reducer from "../../reducers/user/userReducer"
import Enzyme from "enzyme"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"
import UserPage from "./UserPage"
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"

let component
let props

const store = configureStore({
  reducer,
})
Enzyme.configure({ adapter: new Adapter() })
const renderComponent = async () => {
  component = shallow(
    <Provider store={store}>
      <UserPage {...props} />
    </Provider>
  )
  await Promise.resolve()
}

beforeEach(() => {
  props = {
    data: [
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
    ],
  }
  renderComponent()
})

describe("#UserPagePage", () => {
  it("should pass props", () => {
    expect(component.find("Connect(UserPage)").props().data.length).toEqual(1)
  })
})
