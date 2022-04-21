import React from "react"
import { Button, Modal, Row, Space, Table } from "antd"

const UserDetailsPage = ({ data }) => {
  const [openModal, setOpenModal] = React.useState(false)
  const [userData, setUserData] = React.useState(null)
  const handleCancel = () => setOpenModal(false)
  const handleOk = () => setOpenModal(false)
  const viewProfile = (record) => {
    setUserData(record)
    setOpenModal(true)
  }
  const columns = [
    {
      title: "Company",
      dataIndex: "company",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Position",
      dataIndex: "position",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button onClick={() => viewProfile(record)}>View Profile</Button>
        </Space>
      ),
    },
  ]
  return (
    <>
      <Table columns={columns} dataSource={data} />
      <Modal title={`${userData?.name}'s Profile'`} visible={openModal} onOk={handleOk} onCancel={handleCancel}>
        <Row>
          Age: {userData?.profile.age}
        </Row>
        <Row>
          Gender: {userData?.profile.gender}
        </Row>
        <Row>
          Planet: {userData?.profile.planet}
        </Row>
        <Row>
          Species: {userData?.profile.species}
        </Row>
        <Row>
          Status: {userData?.profile.status}
        </Row>
      </Modal>
    </>
  )
}

export default UserDetailsPage
