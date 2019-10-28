import React, { Component } from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';
import './HeaderTabs.css'

class HeaderTabs extends Component {
    state = {
        mode: '0',
    }

    handleModeSwitch = (event, newValue) => {
        this.setState({
            mode: newValue,
        })
    }

    render() {
        return (
            <div className="headerTabsDiv">
                <Paper className="header">
                    <Tabs
                        className="tabBar"
                        value={this.state.mode}
                        onChange={this.handleModeSwitch}
                        indicatorColor="secondary"
                        textColor="primary"
                        centered
                    >
                        <Tab className="headerTab" value="0" label="Add" />
                        <Tab className="headerTab" value="1" label="Upload" />
                    </Tabs>
                </Paper>
            </div>
        );
    }
}

export default HeaderTabs;