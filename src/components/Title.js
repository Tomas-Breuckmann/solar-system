import React from 'react';

// const { headline } = this.props;

class Title extends React.Component {
  render() {
    return (
      <h2>{this.props.headline}</h2>
    //   <h2>{headline}</h2>
    );
  }
}

export default Title;