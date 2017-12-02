import React, {Component} from 'react';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [{
                name: 'Ala Grażyna'
            }, {
                name: 'Jola Ola'
            }, {
                name: 'Danuta Katarzyna'
            }]
        }
    }

    render() {
        return (
            < div>
                < h1> Users</h1>
                {this.state.users.map((user, index) => (
                    <div key={index}>{user.name}</div>
                ))}
            </div>
        )
    }
}

export default Users