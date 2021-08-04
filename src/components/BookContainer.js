import React, { Component } from 'react';
import { buyBook, addToPouch } from '../redux/pouch/bookActions';
import { connect } from 'react-redux';

import {
    Button,
    Box,
} from '@material-ui/core';
const electron = window.require('electron');
const { ipcRenderer } = electron;

class BookContainer extends Component {

    sendIpcData = async () => {

        console.log("sendIpcData2");
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
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        numOfBooks: state.numOfBooks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyBook: () => dispatch(buyBook()),
        addToPouch: () => dispatch(addToPouch())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookContainer);