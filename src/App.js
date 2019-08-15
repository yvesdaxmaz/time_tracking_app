import React, { Component } from 'react';
import EditableTimerList from "./components/EditableTimerList";
import ToggleableTimerForm from "./components/ToggleableTimerForm";
import uuid from "uuid";

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

    render() {
        return (
            <div className="ui three column centered grid">
                <div className="column">
                    <EditableTimerList timers={this.state.timers}/>
                    <ToggleableTimerForm isOpen={true}/>
                </div>
            </div>
        )
    }
}
export default TimersDashboard;
