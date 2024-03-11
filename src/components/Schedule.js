import React from 'react';

import {Green} from './Highlights'

class ScheduleEntry extends React.Component {
  render() {
    return (
        <div>
        &emsp;<b>{this.props.time}</b> &emsp; {this.props.description}<br/>
        </div>
      );
    }
}

class ScheduleDay extends React.Component {
    render() {
      return (
          <div>
          <Green>Day {this.props.day}</Green> - {this.props.date}
          <br/>
          </div>
        );
      }
  }

export {ScheduleEntry, ScheduleDay};