import React from 'react';
import { Grid } from 'react-bootstrap';
import ChatName from './ChatName.js';
import ChatRoom from './ChatRoom.js';

require('./Chat.css');

class ChatComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null
    };

    this.handleSubmitName = this.handleSubmitName.bind(this);
  }

  render() {
    return (
      <Grid>
        {!this.state.name && (
          <ChatName handleSubmitName={this.handleSubmitName} />
        )}
        {this.state.name && <ChatRoom name={this.state.name} />}
      </Grid>
    );
  }

  handleSubmitName(name) {
    this.setState({
      name: name
    });
  }
}

export default ChatComponent;
