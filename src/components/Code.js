import React from 'react';

class CodeBlock extends React.Component {
  render() {
    return (
        <div className="narrow">
        <pre><code className={"language-" + this.props.language}>
            {this.props.text}
      </code></pre>
      </div>
      );
    }
}

export default CodeBlock;