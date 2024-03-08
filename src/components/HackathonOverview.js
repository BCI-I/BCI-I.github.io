import React from 'react';

class OverviewTile extends React.Component {
    render() {
        return (
            <div class="tile is-parent">
            <article class={"tile is-child h-tile " + this.props.id}>
              <a href={'#'+this.props.url_id} class="link-no-style">
                <p class="title">{this.props.title}</p>
                <div class="content">
                {this.props.content}
                </div>
              </a>
            </article>
          </div>
        );
    }
}


class Element extends React.Component {
  render() {
    return (
        <section class="hack-at-glance-cont">
        <div class="hackathon-at-a-glance narrow">
        <p class="hackathon-tile-title highlight-darker">
            MIT's first BCI hackathon
        </p>
          

        <div class="tile is-ancestor hackathon-tiles">
            <OverviewTile id="h-what" url_id="h-what" title="What" content={this.props.what} />

            <div class="tile is-vertical is-8">
                <div class="tile is-parent">
                    <OverviewTile id="h-why" url_id="h-info" title="Why" content={this.props.why} />
                </div>
                <div class="tile">
                    <div class="tile is-parent is-vertical">
                    <OverviewTile id="h-when" url_id="h-participate" title="When" content={this.props.when} />
                    <OverviewTile id="h-where" url_id="h-participate" title="Where" content={this.props.where} />
                    </div>

                    <div class="tile is-parent">
                        <OverviewTile id="h-how" url_id="h-participate" title="How" content={this.props.how} />

                    </div>
                </div>
            </div>
        </div>
        
      </div>
        </section>
      );
    }
}

export default Element;