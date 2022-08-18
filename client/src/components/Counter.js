import { toHaveDescription, toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import React, {Component} from "react";

class Counter extends Component{
    state = {
        number: 0
    }

    // constructor(props) {
    //     // 원래 이거 쓰는데 함수형으로 작성했기때문에 필요없음
    //     super(props)
    //     this.handleIncrease = this.handleIncrease.bind(this)
    // }

    handleIncrease = () => {
        // this.setState( {
        //     number: this.state.number + 1
        // })
        this.setState(
            ({ number }) => ({
              number: number + 1
            })
        );
    }

    handleDecrease = () => {
        // this.setState({
        //     number: this.state.number - 1
        // })
        const { number } = this.state;
        this.setState({
            number: number - 1
        })
    }

    render() {
        return (
            <div>
                <h1>counter</h1>
                <div>value: {this.state.number}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        )
    }

}
export default Counter;