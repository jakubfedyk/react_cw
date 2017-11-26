import React, {Component} from 'react';

class Form extends Component {
    render() {
        const FormStyle = {
            backgroundColor:"yellow"
        };
        return <div>
            <form>
                <label>Name:
                    <input style={FormStyle} type='text' name='name'/></label>
                <input type='submit' value='Submit'/>
            </form>
        </div>
    }
}

export default Form;