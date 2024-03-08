import React from 'react';

class CodeBlock extends React.Component {
  render() {
    return (
        <div class="narrow">
        <pre><code class={"language-" + this.props.language}>
            {this.props.text}
      </code></pre>
      </div>
      );
    }
}

export default CodeBlock;