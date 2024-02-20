import React, { useState } from 'react'
import Task from './Task'
import { useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'

const TaskList = () => {
    const tasks = useSelector((state) => state.taskReducer.listTasks)
    const [flag, setFlag] = useState('all')

    return (
        <div style={{ margin: '3%' }}>
            <Button onClick={() => setFlag('all')} style={{ margin: '1%' }}>All</Button>
            <Button onClick={() => setFlag('done')} style={{ margin: '1%' }}>Done</Button>
            <Button onClick={() => setFlag('unDone')} style={{ margin: '1%' }}>UnDone</Button>
            {flag === 'done'
                ? tasks
                    .filter((elt) => elt.isDone === true)
                    .map((elt, key) => <Task task={elt} key={elt.id} />)
                : flag === 'unDone'
                    ? tasks
                        .filter((elt) => elt.isDone === false)
                        .map((elt, key) => <Task task={elt} key={elt.id} />)
                    : tasks.map((elt, key) => <Task task={elt} key={elt.id} />)}
        </div>
    )
}

export default TaskList

