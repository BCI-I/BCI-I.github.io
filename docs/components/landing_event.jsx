"use strict";

const e = React.createElement;

class LandingEvent extends React.Component {
  render() {
    // Check if data is loaded
    if (!this.props.title) {
      return <div>Loading...</div>;
    }
    
    return (
        <a href={this.props.url} className="event-link" target="_blank">
          <div className={"event event-" + this.props.color}>
            <div className="event-content">
              <p className="event-title">{this.props.title}</p>
              <p className="event-description ">{this.props.description}</p>
              <div className="event-info vert-on-mobile">
                <div className="columns">
                  <div className="column is-4">
                    {this.props.date}
                  </div>
                </div>

              </div>
            </div>

            {this.props.img &&
              <div className="event-img">
                <img src={"imgs/hackathon/" + this.props.img}
                  alt={this.props.img_alt} />
              </div>
            }
          </div>
        </a>
      );
    }
}
    

const domContainer = document.querySelector('#landing-events');
const root = ReactDOM.createRoot(domContainer);
root.render(
  <div>
    <LandingEvent
      url="https://bci-i.github.io/hackathon"
      color="green"
      title="MIT BCI Hackathon"
      description="MIT's first BCI hackathon."
      date="Boston, February '24"
      img="header_head_only_transp.png"
      img_alt="MIT BCI Hackathon"
    />
    <LandingEvent
      url="https://www.meetup.com/neurotechbos/events/298910223"
      color="blue"
      title="NTBOS & BCI-I Networking event"
      description="An evening of networking with the
      Boston BCI community."
      date="Boston, February '24"
    />
  </div>
);

// // Fetch YAML data
// fetch('data/events_previes.yaml')
//   .then(response => response.text())
//   .then(text => {
//     // Parse YAML data
//     const data = jsyaml.load(text);
    
//     // Iterate over each entry in the YAML data
//     for (const [key, value] of Object.entries(data)) {
//       console.log(key, value);
//       // create instance passing props
//       root.render(e(LandingEvent, {
//         url: value.url,
//         color: value.color,
//         title: value.title,
//         description: value.description,
//         date: value.date
//       }));
//     }
//   })
//   .catch(error => console.error('Error fetching YAML data:', error));