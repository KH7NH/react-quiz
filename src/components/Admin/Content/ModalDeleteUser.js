import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUsers } from '../../../services/apiService'
import { toast } from 'react-toastify';


const ModalDeleteUser = (props) => {
    const { show, setShow, dataDelete } = props;

    const handleClose = () => setShow(false);

    const handleSubmitDeleteUser = async () => {
        let data = await deleteUsers(dataDelete.id)
        if (data && data.EC === 0) {
            toast.success('Delete user success')
            handleClose()
            await props.fetchListUser()
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM)
        }
    }
    return (
        <>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop='static'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete the user</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure delete this user with email:
                    <b>{dataDelete && dataDelete.email ? dataDelete.email : ''}</b>
                    ?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => { handleSubmitDeleteUser() }}
                    >
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeleteUser;