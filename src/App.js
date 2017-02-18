import React from 'react';
import { Component } from 'jumpsuit'
import AppBar from './AppBar';
import MainTabs from './MainTabs'

export default Component( {
  render() {
    return (
      <div>
          <AppBar />
          <MainTabs />
      </div>
    );
  }
})


