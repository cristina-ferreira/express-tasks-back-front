import React, { Component, Fragment } from 'react';
import TaskInput from "./TaskInput";
import Task from "./Task";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
    }

    componentDidMount() {
        this.getTasks();
    }

    getTasks = () => {
        fetch("http://localhost:3000/tasks", {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        })
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    tasks: data.foundTasks
                });
            });
    }

    onMarkAsDone = (task) => {
        
        this.setState((state) => {
            const updatedTasks = state.tasks.map((t) => {
                if (t._id === task._id) {
                    return { ...t, isDone: !t.isDone };
                }
                return t;
            });
            return { tasks: updatedTasks };
        });
    }

    render() {
        const { tasks } = this.state;
        return (
            <Fragment>
                <TaskInput />
                {tasks.map(task => <Task task={task} key={task._id} handleClickTask={this.onMarkAsDone} />)}
            </Fragment>
        );
    }
}

export default App;
