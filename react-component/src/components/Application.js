
import React from 'react';
class Application extends React.Component {
    constructor(myAwesomeProps) {
        super(myAwesomeProps);
        this.state = {
            count:0
        }
    }
    render() {
        return <div>
            <h1>I have value: {this.state.count}</h1>
            <button onClick={this.handleClick}>Button</button>
        </div>;
    }
}

export default Application;