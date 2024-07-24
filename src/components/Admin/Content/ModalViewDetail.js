import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from 'react-icons/fc'
import _ from 'lodash'

const ModalViewDetail = (props) => {
    const { show, setShow, dataViewDetail } = props

    const handleClose = () => {
        setShow(false)
        setEmail('')
        setPassword('')
        setUsername('')
        setRole('USERS')
        setImage('')
        setPreviewImage('')
        props.resetViewDetailData()
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [role, setRole] = useState('USER')
    const [image, setImage] = useState('')
    const [previewImage, setPreviewImage] = useState('')

    useEffect(() => {
        if (!_.isEmpty(dataViewDetail)) {
            //update state
            setEmail(dataViewDetail.email)
            setUsername(dataViewDetail.username)
            setRole(dataViewDetail.role)
            setImage('')
            if (dataViewDetail.image) {
                setPreviewImage(`data:image/jpeg;base64,${dataViewDetail.image}`)
            }
        }
    }, [dataViewDetail])

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal
                show={show}
                onHide={handleClose}
                size='xl'
                backdrop='static' // chi nhan vao close hoac x moi thoat ra ngoai
                className='modal-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Informations Detail User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email"
                                className="form-control"
                                value={email}
                                disabled
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input type="password"
                                className="form-control"
                                value={password}
                                disabled
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                value={username}
                                disabled
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select disabled value={role} className="form-select" onChange={(e) => setRole(e.target.value)}>
                                <option value='USER'>USER</option>
                                <option value='ADMIN'>ADMIN</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">id</label>
                            <input type="text"
                                className="form-control"
                                value={dataViewDetail.id}
                                disabled
                            />
                        </div>
                        <div className='col-md-12'>
                            <label className='form-label label-upload' htmlFor='labelUpload'>
                                <FcPlus />
                                Upload File Image
                            </label>
                            <input
                                type='file'
                                hidden
                                id='labelUpload'
                                disabled
                            />
                        </div>
                        <div className='col-md-12 img-preview'>
                            {previewImage ?
                                <img src={previewImage} />
                                :
                                <span>Preview</span>
                            }
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalViewDetail