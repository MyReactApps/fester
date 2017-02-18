import React from 'react';
import { Component } from 'jumpsuit';
import {Tabs, Tab} from 'material-ui/Tabs';
import TabOne from './TabOne';

export default Component ({
    render(){
        return(
            <Tabs>
                <Tab label="Item One" >
                    <div>
                        <TabOne />
                    </div>
                </Tab>
                <Tab label="Item Two" >
                    <div>
                        <p>
                            This is example tab.
                        </p>
                    </div>
                </Tab>
            </Tabs>
        )
    }
})