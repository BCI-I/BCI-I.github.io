import React from 'react';

class Sponsor extends React.Component {
  render() {
    return (
      <div class="card sponsor_card">
        <p class={"sponsor-level " + this.props.tier} style={{ "textTransform": "capitalize" }}>
          {this.props.tier}
        </p>

        <a href={this.props.url} target="_blank">
          <div class="card-image">
            <figure class="image">
              <img src={this.props.logo}
                alt="Sponsor Logo" />
            </figure>
          </div>
        </a>

        <div class="content">
          <a href={this.props.url}
            target="_blank" class="sponsor-name">{this.props.name}</a>
          <br /><br />
          <p class="text-quote">{this.props.quote}</p>
          <p class="sponsor-blurb">
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
        class={"column partner-logo partner-logo " + (
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