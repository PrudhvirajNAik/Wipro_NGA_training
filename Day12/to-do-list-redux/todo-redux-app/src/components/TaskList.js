import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTask,deleteTask } from "../features/todoSlice";
import TaskItem from './TaskItem';


const TaskList = () => {
    const tasks = useSelector((state) => state.todos.tasks);
    const filter = useSelector((stste) => state.tools.filter);
    const dispatch = useDispatch();

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'All') return true;
        if (filter === 'Completed') return task.completed;
        if (filter === 'Pending') return !task.completed;
        return true;
          
        
    });

    return (
        <ul classname="list-group mt-3">
            {filterededTasks.map((task) => (
                <TaskItem key={task.id} task={task} dispatch={dispatch} />

            ))}
        </ul>
    );
};

export default TaskList;