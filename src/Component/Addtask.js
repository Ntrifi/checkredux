import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addTask } from '../JS/action'

const AddTask = () => {
    const [task, setTask] = useState('')
    const dispatch = useDispatch()
    const handleClick = (e) => {
        e.preventDefault()
        task
            ? dispatch(addTask({ id: Math.random(), caption: task, isDone: false }))
            : alert("Task can't be ampty")
        setTask('')
    }
    return (
        <div className='addtask' style={{ display: 'flex', justifyContent: 'center' }}>
            <Form onSubmit={handleClick} >
                <Form.Control style={{ width: '300px', marginTop: '30px' }}
                    type="text"
                    placeholder="task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <Button variant="dark" type="submit" style={{ marginTop: '10px' }}>
                    Add
                </Button>
            </Form>
        </div>
    )
}
export default AddTask;