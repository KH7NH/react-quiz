import ReactPaginate from "react-paginate";

const TableUserPaginate = (props) => {

    const { listUsers, pageCount } = props

    const handlePageClick = (event) => {
        console.log(`User requested page number ${event.selected}`);
        props.fetchListUserWithPaginate(+event.selected + 1)
        props.setCurrentPage(+event.selected + 1)
 
    };

    return (
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">NO</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            console.log("check item", item)
                            return (
                                <tr key={`table-users-${index}`}>
                                    {/* <td>{item.id}</td> */}
                                    <td>{index + 1}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td>
                                        <button className="btn btn-secondary"
                                            onClick={() => props.handleClickBtnViewDetail(item)}
                                        >
                                            View
                                        </button>
                                        <button
                                            className="btn btn-warning mx-3"
                                            onClick={() => props.handleClickBtnUpdate(item)}
                                        >
                                            Update
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => props.handleClickBtnDelete(item)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    {listUsers && listUsers.length === 0 && <tr>
                        <td colSpan={4} style={{ textAlign: "center" }}>
                            Not found data
                        </td>

                    </tr>}
                </tbody>
            </table>
            <div className="user-pagination">
                <ReactPaginate
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                    forcePage={props.currentPage - 1}
                />
            </div>
            
        </>
    )
}
export default TableUserPaginate