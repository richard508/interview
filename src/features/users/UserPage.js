import React from "react"
import { Button, Checkbox, Card, Form, Layout } from "antd"
import { connect } from "react-redux"
import { getUsers } from "../../actions/users/UserActions"
import UserDetailsPage from "./DetailsPage"

const UserPage = ({ users, getUsers }) => {
  const { Header, Content, Footer } = Layout
  const [selectedRowKeys, setSelectedRowKeys] = React.useState([])
  const [selectedUsers, setSelectedUsers] = React.useState([])

  const onFinish = () => {
    const filterUsers = users.filter((user) =>
      selectedRowKeys.includes(user.id.toString())
    )
    const mappedUsers = filterUsers.map((user) => {
      return {
        ...user,
        key: user.id,
      }
    })
    setSelectedUsers(mappedUsers)
  }

  const onSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys)
  }

  const data =
    users &&
    users.map((user) => {
      return {
        key: user.id,
        label: `${user.name} - ${user.company}`,
        value: `${user.id}`,
      }
    })

  const hasSelected = selectedRowKeys.length > 0

  const loadUsers = React.useCallback(async () => {
    getUsers()
  }, [getUsers])

  React.useEffect(() => {
    loadUsers()
  }, [loadUsers])

  return (
    <Layout>
      <Header
        className="site-layout-sub-header-background"
        style={{ padding: 0 }}
      />
      <Content style={{ margin: "24px 16px 0" }}>
        <Card>
          <Form name="validate_other" onFinish={onFinish}>
            <Form.Item name="checkbox-group" label="Users">
              <Checkbox.Group
                style={{ display: "flex", flexDirection: "column" }}
                onChange={onSelectChange}
                options={data}
              />
            </Form.Item>
            <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
              <Button disabled={!hasSelected} type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
          <UserDetailsPage data={selectedUsers} />
        </Card>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Interview Coding Challenge
      </Footer>
    </Layout>
  )
}

export default connect(
  (state) => ({
    users: state.users.users,
  }),
  {
    getUsers,
  }
)(UserPage)
