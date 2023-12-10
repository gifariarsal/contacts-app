import React from "react";
import IncreaseButton from "./IncreaseButton";
import CounterDisplay from "./CounterDisplay";
import ResetButton from "./ResetButton";

export default class CounterApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    onIncreaseEventHandler() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }

    onResetEventHandler() {
        this.setState({
            count: 0
        })
    }

    render() {
        return (
            <div>
                <IncreaseButton onIncreaseEventHandler={this.onIncreaseEventHandler.bind(this)} />
                <CounterDisplay count={this.state.count} />
                <ResetButton onResetEventHandler={this.onResetEventHandler.bind(this)} />
            </div>
        )
    }
}