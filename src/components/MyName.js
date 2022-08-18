import React, {Component} from "react";

const MyName = ( {name} ) => {
    return (
        <div>
            Hi? my name is {name} !! 
        </div>
    );
};
MyName.defaultProps = {
    name: 'MJ'
}
export default MyName;

// class MyName1 extends Component {
//     static defaultProps = {
//         name: 'MJ'
//     }
//     render() {
//         return (
//             <div>
//                 Hi, My name is <b>{this.props.name}</b> !! 
//             </div>
//         );
//     }
// }
// export default MyName1;
