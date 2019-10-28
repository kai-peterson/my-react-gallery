import React, { Component } from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';
import './Footer.css'

class Footer extends Component {
    state = {
        tabValue: '0'
    }

    handleTabChange = (event, newValue) => {
        this.setState({
            tabValue: newValue,
        })
        this.props.getImagesSorted(newValue);
    }

    render() {
        return (
            <div className="footerDiv">
                <span className="sortText">Sort By:</span>
                <Paper className="footer">
                    <Tabs
                        className="tabBar"
                        value={this.state.tabValue}
                        onChange={this.handleTabChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab className="footerTab" value="0" label="Date" />
                        <Tab className="footerTab" value="1" label="Likes" />
                        <Tab className="footerTab" value="2" label="Description" />
                    </Tabs>
                </Paper>
            </div>
        );
    }
}

export default Footer;