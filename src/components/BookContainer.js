import React, { Component } from 'react';
import { buyBook, addToPouch } from '../redux/pouch/actions';
import { connect } from 'react-redux';

import {
    Button,
    Box,
} from '@material-ui/core';
const electron = window.require('electron');
const { ipcRenderer } = electron;

class BookContainer extends Component {

    componentDidUpdate() {
        console.log("buyBook : "+this.props.numOfBooks);
        console.log("latestPouchDBResponse : "+JSON.stringify(this.props.latestPouchDBResponse));
    }

    sendIpcData = async () => {

        this.props.addToPouch();
        // const result = await ipcRenderer.invoke('user-data', 'Satish')
        // console.log("<result app> : " + JSON.stringify(result));
    }

    render() {
        return (
            <div>
                <Box textAlign='center'>
                    <Button variant='contained'
                        onClick={e => {
                            this.sendIpcData();
                        }}
                        style={{
                            marginTop: '5em',
                        }}
                    >Send IPC Data(2)
                    </Button>
                </Box>
                <Box textAlign='center'>
                    <p style={{
                        marginTop: '5em',
                    }}> No. of Books {this.props.numOfBooks} </p>
                    <Button variant='contained'
                        onClick={e => {
                            this.props.buyBook();
                        }}
                        style={{
                            marginTop: '1em',
                        }}
                    >Buy Book
                    </Button>
                </Box>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        numOfBooks: state.numOfBooks,
        latestPouchDBResponse: state.latestPouchDBResponse,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyBook: () => dispatch(buyBook()),
        addToPouch: () => dispatch(addToPouch())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookContainer);