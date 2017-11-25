import React from 'react';

class Counter extends React.Component {
    constructor(myAwesomeProps) {
        super(myAwesomeProps);
        this.state = {
            count: 0
        }
    }

    add = () => {
        this.setState({
            count: this.state.count+1
        })
    };

    remove = () => {
        this.setState({
            count: this.state.count-1
        });
    };
    componentWillMount(){
        console.log('jestem w will mount')
    }
    shouldComponentUpdate (nextProps, nextState) {
        if (nextProps === 'Warszawa') {
            return false;
        }
        if (nextState.count > 10) {
            return false
        }
        return true
    }
    componentWillReceiveProps(nextProps){
        this.props.name // Lublin
        nextProps.name //Warszawa
    }

    render() {
        return <div>
            <h1>Hej, mam wartosc: {this.state.count}</h1>;
            <button onClick={this.add}>+</button>
            ;
            <button onClick={this.remove}>-</button>
            ;
        </div>
    }

    componentDidMount() {
        console.log('jestem w did mount')
    }
    componentWillUnmount() {
        console.log('jestem w unmount')
    }
}

export default Counter;