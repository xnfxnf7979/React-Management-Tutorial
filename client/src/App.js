// App.js : 화면 내용 출력 

import React, {Component} from "react";
import Customer from "./components/Customer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const style = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table:  {
    minWidth: 1080
  }
})

class App extends Component {

  state = {
    customers: ""
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err))
  }
  callApi = async ()=> {
    const response = await fetch('/api/customers')
    const body = await response.json()
    return body
  }

  render () {
    const {classes} = this.props
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
        {this.state.customers ? this.state.customers.map(c=> {
          return (<Customer key={c.id} id={c.id} name={c.name} 
                            image={c.image} birthday={c.birthday} 
                            gender={c.gender} job={c.job}/>)
                          }) : ""}
        </TableBody>
        </Table>
      </Paper>
    )
  }
}
export default withStyles(style)(App); 
