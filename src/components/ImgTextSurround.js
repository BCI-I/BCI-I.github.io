import React from 'react';

class ImgTextSurround extends React.Component {  
  render() {
    return (
          <div className="center-img-text-around">
          <p className="top-left">
            {this.props.top_left}
          </p>

          <p className="top-right">
            {this.props.top_right}
          </p>

          <p className="bottom-left">
            {this.props.bottom_left}
          </p>

          <p className="bottom-right">
            {this.props.bottom_right}
          </p>

          <img src={this.props.img_url} alt={this.props.img_alt}
            style={{"borderRadius": "50%"}} />
        </div>
      );
    }
}

export default ImgTextSurround;