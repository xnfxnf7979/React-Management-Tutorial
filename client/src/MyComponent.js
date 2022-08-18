import React, {Component} from "react";

class MyComponent extends Component {
    state  = {
        value: 0
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.value !== nextProps.value) {
            return {
                value: nextProps.value
            }
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        {/* shouldComponentUpdate : 업데이트 막는 함수 
        10 만족하면 true 반환하고 connect 됨, >> 11로 넘어감 
        */}

        if (nextProps.value === 10) return false
        return true
    }

    componentDidUpdate(prevProps, prevState) {
        {/* component 실제로 업데이트 되고난 다음에 호출, 특정 props가 바뀌면 어떤 작업을 하게끔 할 수있음 */}
        if (this.props.value !== prevProps.value) {
            console.log('value 값이 바뀌었다!', this.props.value)
        }
    }

    componentWillUnmount(){
        {/* 컴포넌트 제거 */}
        console.log('Good bye!')
    }

    render() {
        return (
            <div>
                <p>props: {this.props.value}</p>
                <p>state: {this.state.value}</p>
            </div>
        )
    }
}

export default MyComponent;