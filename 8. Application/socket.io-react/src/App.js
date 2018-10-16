import React from 'react';
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

class AppComponent extends React.Component {
  constructor() {
    super();
    this.sendSocketIO = this.sendSocketIO.bind(this);
  }

  sendSocketIO() {
    socket.emit('example_message', 'demo');
  }

  render() {
    return (
      <div>
        <button onClick={this.sendSocketIO}>Send Socket.io</button>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
