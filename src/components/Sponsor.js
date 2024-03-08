import React from 'react';

class Sponsor extends React.Component {
  render() {
    return (
      <div className="card sponsor_card">
        <p className={"sponsor-level " + this.props.tier} style={{ "textTransform": "capitalize" }}>
          {this.props.tier}
        </p>

        <a href={this.props.url} target="_blank">
          <div className="card-image">
            <figure className="image">
              <img src={this.props.logo}
                alt="Sponsor Logo" />
            </figure>
          </div>
        </a>

        <div className="content">
          <a href={this.props.url}
            target="_blank" className="sponsor-name">{this.props.name}</a>
          <br /><br />
          <p className="text-quote">{this.props.quote}</p>
          <p className="sponsor-blurb">
            {this.props.children}
          </p>
        </div>
      </div>
    );
  }
}


class Partner extends React.Component {
  

  render() {
    return (
      <div
        className={"column partner-logo partner-logo " + (
          this.props.transparent ? "partner-logo-transparent" : ""
        )}>
        <a href={this.props.url} target="_blank">
          <img src={this.props.img}
            alt={this.props.alt}
            />
        </a>
      </div>
    );
  }
}

export { Sponsor, Partner };