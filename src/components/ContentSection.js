import React from 'react';

import {TitleLink, SubTitleLink} from './TitleLink';

class ContentSubSection extends React.Component {
    render() {
      return (
        <div>
            {/* If title is passed make a subtitle link */}
            {this.props.title && <SubTitleLink title={this.props.title} id={this.props.title_id} />}

            {/* Content */}
            {this.props.children}
        </div>
        );
      }
  }


class ContentSection extends React.Component {
  render() {
    return (
        <section className="hackathon-info narrow">
            {/* If title is passed make a title link */}
            {this.props.title && <TitleLink title={this.props.title} id={this.props.title_id} />}

            {/* Content */}
            {this.props.children}
        </section>
      );
    }
}

export  {ContentSection, ContentSubSection};