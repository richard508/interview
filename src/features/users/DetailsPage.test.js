import { shallow } from "enzyme/build"
import Enzyme from "enzyme"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"
import UserDetailsPage from "./DetailsPage"

let component
let props

Enzyme.configure({ adapter: new Adapter() })
const renderComponent = async () => {
  component = shallow(<UserDetailsPage {...props} />)
  await Promise.resolve()
}

beforeEach(() => {
  props = {
    data: {
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
  }
  renderComponent()
})

describe("#UserDetailsPage", () => {
  it("renders the component", () => {
    const { dataSource } = component.find("ForwardRef(InternalTable)").props()
    expect(component.find("ForwardRef(InternalTable)").length).toEqual(1)
    expect(dataSource).toEqual({
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
    })
  })
})
