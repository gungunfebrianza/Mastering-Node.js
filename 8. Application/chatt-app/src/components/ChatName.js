import React from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Form,
  Button
} from 'react-bootstrap';

class ChatNameComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null
    };

    this.setName = this.setName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormGroup>
          <ControlLabel>Name</ControlLabel>{' '}
          <FormControl
            id="name"
            type="text"
            label="Name"
            placeholder="Enter your name"
            onChange={this.setName}
            autoComplete="off"
          />
        </FormGroup>
        <Button type="submit">Join Chat</Button>
      </Form>
    );
  }

  setName(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmitName(this.state.name);
  }
}

export default ChatNameComponent;
