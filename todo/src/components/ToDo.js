import React, {Component} from 'react';

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                'Nauczyć się do testu',
                'Zjeść śniadanie',
                'Umyć okna'
            ]
        }

    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                tasks: [
                    'Ala', 'Ma', 'Kota'
                ]
            })
        }, 5000);
    }

    render() {
        return <div>
            <h2>Things to do</h2>
            <ol>
                {this.state.tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ol>
        </div>
    }
}

export default ToDo;