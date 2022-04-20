import React from "react"
import { Layout, Table } from "antd"
import { connect } from "react-redux"
import { getUsers } from "../../actions/users/UserActions"

const UserPage = ({ users, getUsers }) => {
  const columns = [
    {
      title: "Company",
      dataIndex: "company",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
  ]
  // const data = []
  const data = users.users && users.users.map((user) => {
    return {
      key: user.id,
      company: user.company,
      name: user.name,
    }
  })
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  }
  const { Header, Content, Footer } = Layout
  console.log(users)
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
      <Table
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
      </Content>
      <Footer style={{ textAlign: "center" }}>Interview design</Footer>
    </Layout>
  )
}

export default connect(
  (state) => ({
    users: state.users,
  }),
  {
    getUsers,
  }
)(UserPage)
