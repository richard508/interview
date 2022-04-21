import React from "react"
import { Button, Card, Layout, Table } from "antd"
import { connect } from "react-redux"
import { getUsers } from "../../actions/users/UserActions"

const UserPage = ({ users, getUsers }) => {
  const { Header, Content, Footer } = Layout
  const [selectedRowKeys, setSelectedRowKeys] = React.useState([])

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

  const veiwRows = () => {
    console.log(selectedRowKeys)
  }

  const onSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys)
  }

  const data =
    users &&
    users.map((user) => {
      return {
        key: user.id,
        company: user.company,
        name: user.name,
      }
    })

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  }

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
          <div>
            <div style={{ marginBottom: 16 }}>
              <Button type="primary" onClick={veiwRows} disabled={!hasSelected}>
                View Selected Rows
              </Button>
              <span style={{ marginLeft: 8 }}>
                {hasSelected ? `Selected ${selectedRowKeys.length} rows` : ""}
              </span>
            </div>
            <Table
              rowSelection={rowSelection}
              columns={columns}
              dataSource={data}
            />
          </div>
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
