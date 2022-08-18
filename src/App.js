// App.js : 화면 내용 출력 

import React, {Component} from "react";
import Customer from "./components/Customer";


const customer = [{
  'id': 1,
  'image': 'https://placeimg.com/768/224/15',
  'name': 'hms',
  'birthday': '980406',
  'gender': 'male',
  'job': 'junior'
},
{
  'id': 2,
  'image': 'https://placeimg.com/768/224/2',
  'name': 'ymj',
  'birthday': '980506',
  'gender': 'female',
  'job': 'junior'
},
{
  'id': 3,
  'image': 'https://placeimg.com/768/224/4',
  'name': 'bjy',
  'birthday': '750405',
  'gender': 'male',
  'job': 'junior'
}]

class App extends Component {
  render () {
    return (
      <div>
      {/* <Customer
        id = {customer[0].id}
        image = {customer[0].image}
        name={customer[0].name}
        birthday= {customer[0].birthday}
        gender = {customer[0].gender}
        job ={customer[0].job}
      />
      <Customer
        id = {customer[1].id}
        image = {customer[1].image}
        name={customer[1].name}
        birthday= {customer[1].birthday}
        gender = {customer[1].gender}
        job ={customer[1].job}
      />
      <Customer
        id = {customer[2].id}
        image = {customer[2].image}
        name={customer[2].name}
        birthday= {customer[2].birthday}
        gender = {customer[2].gender}
        job ={customer[2].job} // >>>>> this code is bad !!!
      /> */}
      {
        customer.map(c=> {
          return (
            <Customer 
              key={c.id}
              id={c.id}
              name={c.name}
              image={c.image}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          )
        })
      }
      </div>
    )
  }
}
export default App; 
