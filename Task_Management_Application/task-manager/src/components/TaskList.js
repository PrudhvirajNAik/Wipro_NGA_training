import React from "react";
import TaskItem from "./TaskItem";
import { useSelector, useDispatch } from "react-redux";
import { addTask,deleteTask } from "../redux/actions";

const TaskList = () => {
    const task = useSelector(state => state.task);
    const dispatch = useDispatch();

    const handleAddTask = () => {
        const task = {id:Date.now(), name:'New Task'};
        dispatch(addTask(task));
    };
    const handleDeleteTask = (taskId) => {
        dispatch(deleteTask(taskId));

    };
    

    return(
        <div> 
            <button onClick={handleAddTask}>AddTask</button>
            <ul>
                {task.map(task =>(
                    <TaskItem key={task.id} task={task} onDelete ={handleDeleteTask}/>

                ))}
            </ul>
        </div>
    );
};

export default TaskList;