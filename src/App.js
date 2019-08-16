import React, { Component } from 'react';
import EditableTimerList from "./components/EditableTimerList";
import ToggleableTimerForm from "./components/ToggleableTimerForm";
import uuid from "uuid";
import helpers from "./helpers";

class TimersDashboard extends Component {
    state = {
        timers: [
            {
                title:"Learn React",
                project:"Web Domination",
                id: uuid.v4(),
                elapsed:'8986300',
                runningSince: Date.now(),
            },
            {
                title:"Bake squash",
                project:"Kitchen Chores",
                id: uuid.v4(),
                elapsed:'8986300',
                runningSince:null,
            },
        ],
    };

    handleEditFormSubmit = (attrs) => {
        this.updateTimer(attrs);
    };

    handleCreateFormSubmit = (timer) => {
        this.createTimer(timer);
    };

    handleTrashClick = (timerId) => {
        this.deleteTimer(timerId);
    };

    deleteTimer = (timerId) => {
        this.setState({
            timers: this.state.timers.filter(timer => timer.id !== timerId),
        });
    };

    createTimer = (timer) => {
        const t = helpers.newTimer(timer);
        this.setState({
            timers: this.state.timers.concat(t),
        });
    };

    updateTimer = (attrs) => {
        this.setState({
            timers: this.state.timers.map((timer) => {
                if(timer.id === attrs.id) {
                    return Object.assign({}, timer, {
                        title: attrs.title,
                        project: attrs.project,
                    });
                } else {
                    return timer;
                }
            })
        });
    };

    render() {
        return (
            <div className="ui three column centered grid">
                <div className="column">
                    <EditableTimerList 
                        timers={this.state.timers} 
                        onFormSubmit={this.handleEditFormSubmit} 
                        onTrashClick={this.handleTrashClick}
                    />
                    <ToggleableTimerForm isOpen={true} onFormSubmit={this.handleCreateFormSubmit} />
                </div>
            </div>
        )
    }
}
export default TimersDashboard;
