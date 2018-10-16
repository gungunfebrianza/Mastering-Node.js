import React, { Component } from 'react';

class Layout extends Component {
  render() {
    const { title } = this.props;
    return (
      <div>
        <div className="container">{title}</div>
      </div>
    );
  }
}

export default Layout;
