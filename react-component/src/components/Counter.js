import React from 'react';

class Counter extends React.Component {
    constructor(myAwesomeProps) {
        super(myAwesomeProps);
        this.state = {
            count: 0
        }
    }
    render() {
        return <div>
            <h1>Hej, mam wartosc: {this.state.count}</h1>;
        <button>+</button>;
        <button>-</button>;
        </div>
    }
}
    export default Counter;