import React from 'react';

class TitleLink extends React.Component {
  render() {
    return (
      <a className="fancy-title clean-link" 
      style={{"marginTop": "1em"}}
      id={this.props.id}
      href={"#"+this.props.id}>
        {this.props.title}
      </a>
      );
    }
}

export default TitleLink;