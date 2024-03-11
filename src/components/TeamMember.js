import React from 'react';

class TeamMember extends React.Component {
  render() {
    return (
        <div className="team-member">
        <div className="tm-photo">
          <img className="tm-photo-col" src={this.props.img} />
        </div>
        <div className="tm-bio">
          <div className="tm-title">
            <p className="tm-name">{this.props.name}</p>
            <p className="tm-role">{this.props.role}</p>
          </div>
          <p className="tm-blurb">
            {this.props.blurb}
          </p>
        </div>
      </div>
      );
    }
}

export default TeamMember;