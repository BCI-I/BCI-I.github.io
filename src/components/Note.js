import React from 'react';

class Note extends React.Component {
  render() {
    return (
      <div className={"narrow note-" + this.props.color}>
        <div className="note-title">
          {this.props.title}
        </div>
        <div className="note-content">
          {this.props.children}
        </div>
      </div>
      );
    }
}

export default Note;