import React, {Component} from 'react';


class Search extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleFormSubmit.bind(this)
    }
    handleFormSubmit(event) {
        console.log('Wartosc search: ' + this.searchField.value);
        event.preventDefault();
    }
    render() {
        const styleInput = {
            backgroundColor: 'blue'
        };
        return <div>
            <form onSubmit={this.handleSubmit}>
                <input type='text' ref={field => this.searchField = field}/>
                <input type='submit' style={styleInput} value='Szukaj'/>
            </form>
        </div>
    }
}

    export default Search