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
                elapsed: 0,
                runningSince: Date.now(),
            },
            {
                title:"Bake squash",
                project:"Kitchen Chores",
                id: uuid.v4(),
                elapsed: 0,
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

    handleStartClick = (timerId) => {
        this.startTimer(timerId);
    };

    handleStopClick = (timerId) => {
        this.stopTimer(timerId);
    };

    deleteTimer = (timerId) => {
        this.setState({
            timers: this.state.timers.filter(t=> t.id !== timerId),
        });
    };

    startTimer = (timerId) => {
        const now = Date.now();
        this.setState({
            timers: this.state.timers.map((timer) => {
                if(timer.id === timerId) {
                    return Object.assign({}, timer, { runningSince: now });
                } else {
                    return timer;
                }
            })
        });
    };

    stopTimer = (timerId) => {
        const now = Date.now();
        this.setState({
            timers: this.state.timers.map((timer) => {
                if(timer.id === timerId) {
                    const lastElapsed = now - timer.runningSince;
                    return Object.assign({}, timer, {
                        elapsed: timer.elapsed + lastElapsed,
                        runningSince: null,
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
                        onStartClick={this.handleStartClick}
                        onStopClick={this.handleStopClick}
                    />
                    <ToggleableTimerForm isOpen={true} onFormSubmit={this.handleCreateFormSubmit} />
                </div>
            </div>
        )
    }
}
export default TimersDashboard;
