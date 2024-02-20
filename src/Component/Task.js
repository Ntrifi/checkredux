import { Button, Row, Col } from 'react-bootstrap'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, doneTask } from '../JS/action'
import Edittask from './Edittask'

const Task = ({ task }) => {
    const dispatch = useDispatch()
    return (
        <div>
            <Row>
                <Col md={6}>
                    <h3 className={task.isDone ? 'done' : 'undone'}>{task.caption}</h3>
                </Col>
                <Col md={2}>
                    <Edittask task={task} />
                </Col>
                <Col md={2}>
                    {''}
                    <Button variant="danger"
                        onClick={() => dispatch(deleteTask(task.id))}>
                        Delete
                    </Button>
                </Col>
                <Col md={2}>
                    <Button onClick={() => dispatch(doneTask(task.id))}>
                        {task.isDone ? 'UnDone' : 'Done'}
                    </Button>
                </Col>
            </Row>
        </div>
    )
}

export default Task

