import React, { Component } from 'react';
import EditableTimerList from "./components/EditableTimerList";
import ToggleableTimerForm from "./components/ToggleableTimerForm";
import 'semantic-ui/dist/semantic.min.css';

class TimersDashboard extends Component {
    render() {
        return (
            <div className="ui three column centered grid">
                <div className="column">
                    <EditableTimerList />
                    <ToggleableTimerForm isOpen={true}/>
                </div>
            </div>
        )
    }
}
export default TimersDashboard;