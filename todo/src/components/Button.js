import React, {Component} from 'react';

class Button extends Component {
    render() {
        const ButtonStyle ={
            backgroundColor: 'green',
            color:'yellow'
        };
        return <div>
            <button style={ButtonStyle}>{this.props.label}</button>
        </div>
    }
}

export default Button;