import React from 'react';


const Task = ({ task, handleClickTask }) => {
    const handleClick = () => handleClickTask(task);

    return (
        <div>
            <p>
                {task.content}
            </p>
            <div role="presentation" onClick={handleClick}>
                {task.isDone ? <p>[X]</p> : <p>[ ]</p> }
            </div>
        </div>
    );
};

export default Task;
