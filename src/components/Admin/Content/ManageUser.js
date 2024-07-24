import ModalCreateUser from "./ModalCreateUser"
import './ManageUser.scss'
import TableUser from "./TableUser"
import { useEffect, useState } from "react"
import { getAllUsers } from '../../../services/apiService'
import ModalUpdateUser from "./ModalUpdateUser"
import ModalViewDetail from "./ModalViewDetail"
import ModalDeleteUser from "./ModalDeleteUser"

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false)
    const [listUsers, setListUsers] = useState([])
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false)
    const [dataUpdate, setDataUpdate] = useState({})
    const [showModalViewDetailUser, setShowModalViewDetailUser] = useState(false)
    const [dataViewDetail, setDataDetail] = useState({})
    const [showModalDeleteUser, setShowModalDeletelUser] = useState(false)
    const [dataDelete, setDataDelete] = useState({})


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

    const handleClickBtnViewDetail = (user) => {
        setShowModalViewDetailUser(true)
        setDataDetail(user)
    }

    const resetUpdateData = () =>{
        setDataUpdate({})
    }

    const resetViewDetailData = () => {
        setDataDetail({})
    }    

    const handleClickBtnDelete = (user)=>{
        setShowModalDeletelUser(true)
        setDataDelete(user)
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
                        handleClickBtnViewDetail={handleClickBtnViewDetail}
                        handleClickBtnDelete={handleClickBtnDelete}
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
                <ModalViewDetail
                    show={showModalViewDetailUser}
                    setShow={setShowModalViewDetailUser}
                    dataViewDetail={dataViewDetail}
                    resetViewDetailData={resetViewDetailData}
                />
                <ModalDeleteUser
                    show={showModalDeleteUser}
                    setShow={setShowModalDeletelUser}
                    dataDelete={dataDelete}
                    fetchListUser={fetchListUser}
                />
            </div>
        </div>
    )
}
export default ManageUser