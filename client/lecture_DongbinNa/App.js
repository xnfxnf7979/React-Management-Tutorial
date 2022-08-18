// React (dongbin na yotube)

import { render } from "@testing-library/react"
import React from "react";

// 1 
// {/* 함수로 컴포넌트 랜더링 */}
// function formatinfo(student) {
//     return student.name + "["  +student.id+"]";
// }

// function tick() {
//     const element = (
//         <h3> 현재시간은 [{newDate().toLocaleTimeString()}] 입니다 </h3>
//     )
// }

// const student = {
//     id: '20176789',
//     name: 'YMJ',
//     color: 'blue'
// }

// const element = (
//     <h3 class={student.color}>
//     {formatinfo(student)}
//     </h3>
// )
// ReactDOM.render(<HelloReact/>,
// document.getElementById('root'))

// 2  <props>
// 2.1
// function Show(props) {
//     return (
//         <h3>Name is {props.name}</h3>
//     )
// }
// function App() {
//     return (
//         <main>
//             <Show name='MJ'/>
//             <Show name='HS'/>
//             <Show name='MS'/>
//         </main>
//     )
// }
// Show.defaultProps = {
//     name: 'YMJ'
// }
// const element = <Show name='MJ'/>

// ReactDOM.render(<App/>,
// document.getElementById('root'))

// 2.2
// function User(props) {
//     return (
//         <div>
//             <img src={props.user.imgUrl}/>
//             &nbsp;
//             <strong>{props.user.name}</strong>
//         </div>
//     )
// }
// function Board(props) {
//     return (
//         <section>
//             <User user={props.user}/>
//             {props.title}
//             <hr/>
//             {props.content}
//         </section>
//     )
// }

// const borad  = {
//     title: '게시글 제목',
//     content: '반가와욥',
//     user: {
//         name: 'MJ',
//         imgUrl: 'https://placeimg.com/32/32/any'
//     }
// }
// ReactDOM.render(
//     <Board
//         title={borad.title}
//         content={borad.content}
//         user = {borad.user}
//     />,
//     document.getElementById('root')
// )

// 3. <state> - 변경 가능 (props는 변경 불가)

// not good exam 
// function Clock(props) {
//     return (
//         <h3>
//             현재 시간은 [{props.date.toLocaleTimeString()}].
//         </h3>
//     )
// }
// function tick() {
//     // const element = (
//     //     <h3>
//     //         현재 시간은 [{newDate().toLocaleTimeString()}].
//     //     </h3>
//     // )
//     // ReactDOM.render(element,
//     //     document.getElementById('root'))
//     ReactDOM.render(<Clock date={newDate()}/>, document.getElementById('root'))
// }
// setInterval(tick, 1000)

// better good exam
// class Clock extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             date: NewDate()
//         }
//     }

//     tick() {
//         this.setState({
//             date: newDate()
//         })
//     }
//     componentDidMount() {
//         this.timerID = setInterval(() => this.tick(), 1000)
//     }
//     componentWillUnmount(){
//         clearInterval(this.timerID)
//     }

//     render() {
//         return (
//         <h3>
//              현재 시간은 [{this.state.date.toLocaleTimeString()}].
//         </h3>   
//         )
//     }
// }
// ReactDOM.render(<Clock/>, document.getElementById('root'))

// better..another exam <add button!>
// class Clock extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             date: NewDate()
//         }
//     }
//     goBack() {
//         let nextDate= this.state.date
//         nextDate.setSeconds(nextDate.getSeconds()-10)
//         this.setState({
//             date: nextDate
//         })
//     }

//     render() {
//         return (
//         <div>
//         <h3>
//              현재 시간은 [{this.state.date.toLocaleTimeString()}].
//         </h3>
//         <button onClick={this.goBack.bind(this)}>10초 뒤로가기</button>
//         </div>

//         )
//     }
// }
// ReactDOM.render(<Clock/>, document.getElementById('root'))


// 4. lifecycle api
// 초기구성 (컴포넌트 객체가 실제로 dom에 삽입되기 전까지의 과정: mounting)
// 1) constructor
// 2) componentWillMount
// 3) render
// 4) componentDidMount
//    컴포넌트 구성 후 componentDidMount 에서 api 호출하면 효과적임
// 데이터 변경 (화면에 객체 랜더링 하려면 props/state 사용해야 함. 이 두개는 보통 다음 과정을 따름)
// 1) shouldComponentUpdate
// 2) componentWillUpdate
// 3) render
// 4) componentDidUpdate
//    기본적으로 컴포넌트 데이터, 화면에 출력된 내용 다를때 should~ 함수 동작. 기본 반환 true. 출력 화면 구성 변경하려면
//    componentDidUpdate 사용.
// 컴포넌트 해제
// componentWillUnMount 메소드 리소스 제거
//
// class ApiExample extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             data: ''    
//         }
//     }
//     callApi = () => {
//         fetch('https://jsonplaceholder.typeicode.com/todos/1')
//         .then(res => res.json())    
//         .then(json=> {
//             this.setState({
//                 data: json.title
//             })
//         })
//     }
//     componentDidMount() {
//         this.callApi()
//     }
//     render() {
//         return (
//             <h3>
//                 {this.state.data? this.state.data : '데이터를 불러오는 중입니다'}
//                 {/*>> 1) 데이터를 불러오는 중입니다, 가 먼저 실행. callApi가 render보다 나중에 호출됨 
//                       2) https://jsonplaceholder.typeicode.com/todos/1'의 title을 불러옴 */}
//             </h3>
//         )
//     }
// }
// ReactDOM.render(<ApiExample/>,
// document.getElementById('root'))

// 이벤트 처리 > 카멜케이스 (ex: callApi) 사용 
// class EventHandling extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             isToggleOn: true
//         }
//         // this.handleClick = this.handleClick.bind(this) >> bind 처리임!!!! 
//     }
    
//     handleClick = () => { // handleClick() {} >> handleClick = () => {} 이렇게 바꾸면 자동 bind 처리가 됨!!!!! 
//         this.setState(state => ({
//             isToggleOn: !this.state.isToggleOn
//         }))
//         // console.log('이벤트 처리')
//     }
//     render() {
//         {/* 특정한 변수 값 바꾸기위해선 bind 처리 해줘야함!!!!!!!!!!!!!!!!! */}
//         <button onClick={this.handleClick}>{this.state.isToggleOn? 'ON': 'OFF'}</button>
//     }
// }
// ReactDOM.render(<EventHandling/>,
// document.getElementById('root'))
