import ModalCreateUser from "./ModalCreateUser"
import './ManageUser.scss'
// import TableUser from "./TableUser"
import { useEffect, useState } from "react"
import { getAllUsers, getUsersWithPaginate } from '../../../services/apiService'
import ModalUpdateUser from "./ModalUpdateUser"
import ModalViewDetail from "./ModalViewDetail"
import ModalDeleteUser from "./ModalDeleteUser"
import TableUserPaginate from "./TableUserPaginate"

const ManageUser = (props) => {
                const LIMIT_USER = 3
                const [showModalCreateUser, setShowModalCreateUser] = useState(false)
                const [listUsers, setListUsers] = useState([])
                const [showModalUpdateUser, setShowModalUpdateUser] = useState(false)
                const [dataUpdate, setDataUpdate] = useState({})
                const [showModalViewDetailUser, setShowModalViewDetailUser] = useState(false)
                const [dataViewDetail, setDataDetail] = useState({})
                const [showModalDeleteUser, setShowModalDeletelUser] = useState(false)
                const [dataDelete, setDataDelete] = useState({})
                const [pageCount, setPageCount] = useState(0)
                const [currentPage, setCurrentPage] = useState(1)


    useEffect(() => {
        // fetchListUser()
        fetchListUserWithPaginate(1)
    }, [])

    const fetchListUser = async () => {
        let res = await getAllUsers()
        if (res.EC === 0) {
            setListUsers(res.DT)
        }
    }

    const fetchListUserWithPaginate = async (page) => {
        let res = await getUsersWithPaginate(page, LIMIT_USER)
        if (res.EC === 0) {
            setListUsers(res.DT.users)
            setPageCount(res.DT.totalPages)
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

    const resetUpdateData = () => {
        setDataUpdate({})
    }

    const resetViewDetailData = () => {
        setDataDetail({})
    }

    const handleClickBtnDelete = (user) => {
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

                    {/* <TableUser
                        listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnViewDetail={handleClickBtnViewDetail}
                        handleClickBtnDelete={handleClickBtnDelete}
                    /> */}

                    <TableUserPaginate
                        listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnViewDetail={handleClickBtnViewDetail}
                        handleClickBtnDelete={handleClickBtnDelete}
                        fetchListUserWithPaginate={fetchListUserWithPaginate}
                        pageCount={pageCount}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />

                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUser={fetchListUser}
                    fetchListUserWithPaginate={fetchListUserWithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    fetchListUser={fetchListUser}
                    resetUpdateData={resetUpdateData}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    fetchListUserWithPaginate={fetchListUserWithPaginate}
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
                    fetchListUserWithPaginate={fetchListUserWithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    )
}
export default ManageUser