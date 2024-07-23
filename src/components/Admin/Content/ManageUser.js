import ModalCreateUser from "./ModalCreateUser"
import './ManageUser.scss'
import TableUser from "./TableUser"
import { useEffect, useState } from "react"
import { getAllUsers } from '../../../services/apiService'
import ModalUpdateUser from "./ModalUpdateUser"

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false)
    const [listUsers, setListUsers] = useState([])
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false)
    const [dataUpdate, setDataUpdate] = useState({})

    useEffect(() => {
        fetchListUser()
    }, [])

    const fetchListUser = async () => {
        let res = await getAllUsers()
        if (res.EC === 0) {
            setListUsers(res.DT)
        }
    }

    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true)
        setDataUpdate(user)
    }

    const resetUpdateData = () =>{
        setDataUpdate({})
    }

    return (
        <div className="manage-user-container">
            <div className="title">
                Manage
            </div>
            <div className="users-content">
                <div>
                    <button
                        className="btn btn-primary btn-add-new"
                        onClick={() => setShowModalCreateUser(true)}
                    >
                        Add new user
                    </button>
                </div>
                <div className="table-user-container">
                    <TableUser
                        listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                    />

                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUser={fetchListUser}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    fetchListUser={fetchListUser}
                    resetUpdateData={resetUpdateData}
                />
            </div>
        </div>
    )
}
export default ManageUser