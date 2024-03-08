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

class SubTitleLink extends React.Component {
  render() {
    return (
      <a className="hackathon-subtitle clean-link" id={this.props.id}
        href={"#" + this.props.id}>
          {this.props.title}
      </a>
      );
    }
}

export {TitleLink, SubTitleLink};