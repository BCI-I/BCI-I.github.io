import React from 'react';

class Highlight extends React.Component {
    render() {
        return (
            <span className={"highlight-" + this.props.color}>
                {this.props.children}
            </span>
        );
    }
}

export default Element;

const Red = ({ children }) => {
    return <Highlight color="salmon">{children}</Highlight>
};

const Blue = ({ children }) => {
    return <Highlight color="lightblue">{children}</Highlight>
};

const Green = ({ children }) => {
    return <Highlight color="green">{children}</Highlight>
};

const Yellow = ({ children }) => {
    return <span className="highlight">
        {children}
    </span>
}

const White = ({ children }) => {
    return <Highlight color="white">{children}</Highlight>
}


export { Red, Blue, Green, Yellow, White };