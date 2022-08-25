import React, {Component} from "react";
import {post} from 'axios';
import { Dialog } from "@material-ui/core";
import {DialogActions} from "@material-ui/core";
import {DialogTitle} from "@material-ui/core";
import {DialogContent} from "@material-ui/core";
import {TextField} from "@material-ui/core";
import {Button} from "@material-ui/core";
import {withStyles} from "@material-ui/core";

const styles = theme => ({
    hidden: {
        display: 'none'
    }
})

class CustomerAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job:'',
            fileName: '',
            open: false
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault() // 데이터만 입력, 새로고침 방지 
        this.addCustomer()
            .then((response) => {
                console.log(response.data)
                this.props.stateRefresh()
            })
        this.setState({
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job:'',
            fileName: '',
            open: false
        })
        // window.location.reload()
    }

    handleFileChange = (e) => {
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        })
    }

    handleValueChange = (e) => {
        let nextState = {}
        nextState[e.target.name] = e.target.value
        this.setState(nextState)
    }

    addCustomer = () => {
        const url = '/api/customers'
        const formData = new FormData()
        formData.append('image', this.state.file)
        formData.append('name', this.state.userName)
        formData.append('birthday', this.state.birthday)
        formData.append('gender', this.state.gender)
        formData.append('job', this.state.job)
        const config = {
            headers: {
                "content-type": "multipart/form-data"
            }
        }
        return post(url, formData, config)
    }

    handleClickOpen = () => {
        this.setState({
            open: true
        })
    }
    handleClose = () => {
        this.setState({
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job:'',
            fileName: '',
            open: false
        })
    }


    render() {
        const {classes} = this.props
        return (
            <div>
                <Button variant="contained" size="small" color="default" onClick={this.handleClickOpen}>
                    ADD Customers
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>고객 추가</DialogTitle>
                    <DialogContent>
                        <input className={classes.hidden} accept='image/*' id='raised-button-file' type='file' file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange}/><br/>
                        <label htmlFor="raised-button-file">
                            <Button variant="contained" color='primary' component='span' name='file'>
                                {this.state.fileName === "" ? "Upload profile image" : this.state.fileName}
                            </Button>
                        </label>
                        <br/>
                        <TextField label='Name' type='text' name='userName' value={this.state.userName} onChange={this.handleValueChange}/><br/>
                        <TextField label='Birthday' type='text' name="birthday" value={this.state.birthday} onChange={this.handleValueChange}/><br/>
                        <TextField label='Gender' type='text' name='gender' value={this.state.gender} onChange={this.handleValueChange}/><br/>
                        <TextField label='Job' type='text' name='job' value={this.state.job} onChange={this.handleValueChange}/><br/>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color='primary' onClick={this.handleFormSubmit}>ADD</Button>
                        <Button variant="outlined" color='primary' onClick={this.handleClose}>Close</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(CustomerAdd);