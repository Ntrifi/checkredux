import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { editTask } from '../JS/action'

const EditTask = ({ task }) => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const [editT, setEditT] = useState('')
    const dispatch = useDispatch()
    const handleEdit = (e) => {
        e.preventDefault()
        dispatch(editTask(task.id, editT))
        setEditT('')
        handleClose()
    }
    return (
        <div>
            <Button variant="dark" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control
                        type="text"
                        placeholder={task.caption}
                        value={editT}
                        onChange={(e) => setEditT(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleEdit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default EditTask