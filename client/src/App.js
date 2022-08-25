// App.js : 화면 내용 출력 

import React, {Component} from "react";
import Customer from "./components/Customer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { CircularProgress } from "@material-ui/core";
import CustomerAdd from "./components/CustomerAdd";

import {AppBar} from "@material-ui/core";
import {Box} from "@material-ui/core";
import {Toolbar} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import {IconButton} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const style = theme => ({
  root: {
    width: '100%',
    minWidth: 1800
    // marginTop: theme.spacing(3),
    // overflowX: 'auto'
  },
  paper: {
    marginLeft: 18,
    marginRight: 18
  },
  table:  {
    minWidth: 1080
  },
  progress: {
    margin: theme.spacing(2)
  },
  tableHead: {
    fontSize: '1.0rem'
  },
  menu: {
    marginTop: 15,
    marginBottom: 15,
    display: 'flex',
    justifyContent: 'center'
  }
})

class App extends Component {

  constructor(props) {
    super(props) 
      this.state = {
        customers: '',
        completed: 0
      }    
  }

  stateRefresh = () => {
    this.setState({
      customers: '',
      completed: 0
    })
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 20)
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err))
  }
  callApi = async ()=> {
    const response = await fetch('/api/customers')
    const body = await response.json()
    return body
  }

  progress = () => {
    const  {completed} = this.state
    this.setState({ completed: completed >= 100 ? 0 : completed+1})
  }

  render () {
    const {classes} = this.props
    const cellist = ['번호','프로필 이미지','이름','생년월일','성별','직업', '설정']
    return (
      <div className={classes.root}>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"> 
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            고객 관리 시스템 
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    
    <div className={this.menu}>
      <CustomerAdd stateRefresh={this.stateRefresh}/> 
    </div>
    
      <Paper className={this.paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {cellist.map((c, idx) => {
                return <TableCell className={this.tableHead} key={idx}>{c}</TableCell>
              })}
            </TableRow>
          </TableHead>
          <TableBody>
        {this.state.customers ? this.state.customers.map(c=> {
          return (<Customer stateRefresh={this.stateRefresh} key={c.id} id={c.id} name={c.name} 
                            image={c.image} birthday={c.birthday} 
                            gender={c.gender} job={c.job}/>)
                          }) : 
                          <TableRow>
                            <TableCell colSpan="6" align="center">
                              <CircularProgress className={classes.progress} value={this.state.completed}/>
                            </TableCell>
                            </TableRow>
        }
        </TableBody>
        </Table>
      </Paper>
      </div>
    )
  }
}
export default withStyles(style)(App); 
