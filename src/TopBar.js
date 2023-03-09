import React, { Component } from 'react';
import ThemeChanger from './ThemeChanger';

class TopBar extends Component {
  render() {
    return (
      <div className="TopBar">
        <h1>Meet App</h1>
        <ThemeChanger />
      </div>
    );
  }
}

export default TopBar;
