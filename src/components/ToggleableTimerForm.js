import React, { Component } from "react";
import TimerForm from "./TimerForm";

class ToggleableTimerForm  extends Component {
    state = {
        isOpen: false,
    }

    handleFormOpen = () => {
        this.setState({ isOpen: true })
    }

    handleFormClose = () => {
        this.setState({ isOpen: false });
    }

    handleFormSubmit = (timer) => {
        this.props.onFormSubmit(timer);
        this.setState({ isOpen: false });
    }

    render() {
        if(this.state.isOpen) {
            return (
                <TimerForm 
                    onFormClose={this.handleFormClose} 
                    onFormSubmit={this.handleFormSubmit}
                />
            );
        } else {
            return (
                <div className="ui basic content center aligned segment">
                    <button 
                        className="ui basic button icon" 
                        onClick={this.handleFormOpen}>
                        <i className="plus icon"></i>
                    </button>
                </div>
            );
        }
    }
}
export default ToggleableTimerForm;
