import React from 'react';
import { Component } from 'jumpsuit';
import {Tabs, Tab} from 'material-ui/Tabs';
import TabOne from './TabOne';
import MainGrid from './MainGrid'

export default Component ({
    render(){
        return(
            <Tabs>
                <Tab label="View Items" >
                    <div>
                        <MainGrid />
                    </div>
                </Tab>
                <Tab label="Create Items" >
                    <div>
                        <TabOne />
                    </div>
                </Tab>
            </Tabs>
        )
    }
})