React
    1. component 기반

* var 
    no use

* const 
    선언 후 고정 값

* let
    유동적인 값 


============================================지난 실습==============================================


import React, { Component, Fragment } from 'react';
import './App.css'
import Counter from './components/Counter';
import MyName from './components/MyName';
import MyComponent from './MyComponent';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }
  componentDidMount() {
    console.log('componentDidMount');
    console.log(this.myDiv.getBoundingClientRect().height)
  }
  state = {
    counter: 1,
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    const name = 'mj react'
    const name1 = 'home'
    const style = {
      backgroundColor: 'black',
      padding: '5px',
      color: 'white',
      fontSize: '15px'
    }
    return (
      // <div style={style}/>
      //<input type={'text'}/>
      <Fragment>
      <Counter/>
      <div className='App'> 
        hello, {name}
      </div>
      <MyName name='react' //props ex
      />
      <div>hello {name1}</div>

      <div>
      {
        1+1 === 2
          ? 'Ok'
          : 'No'
      }
      </div>

      <div>{
        name1 === 'home' && <div>Okay</div>
      }</div>

      <div>
        {
          (()=> {
            if (name == 'mj react') return <div>[ ok ] if func</div>
            return <div>name is not mj react</div>
          })()
        }
      </div>

      <div style={style}>
        style example
      </div>
      
      {/* 주석 사용하려면 괄호로 닫아줘야함 */}
      <div><h1 somthing='hoho' // 여기도 주석 가능
      >
        React!!</h1>
      </div>
      
      {/* 함수형 컴포넌트 디폴트값 지정 */}
      <MyName></MyName>
      
      
      <div ref={ref => this.myDiv = ref}>
        <h1>heollo react!!</h1>
        {/* LifeCycle API exam */}
        {this.state.counter < 10 && <MyComponent value={this.state.counter}></MyComponent>}
          {/* 값이 10이 될때 componentWillUnmount 호출되면서 컴포넌트 사라짐 */}
        <button onClick={this.handleClick}>Click me</button>
      </div>

      

      </Fragment>
    )
  }
}

export default App;