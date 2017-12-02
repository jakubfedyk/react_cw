import React, {Component} from 'react';
import './Button.css'

class Button extends Component {
    render() {
        const ButtonStyle = {
            backgroundColor: 'green',
            color: 'yellow',
            fontSize: 20,
            frameBorder:0,
            borderRadius: 200,
        };
        return <div className="btn-container">
            <button style={ButtonStyle}>{this.props.label}</button>
        </div>
    }
}

export default Button;