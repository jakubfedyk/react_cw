import React, {Component} from 'react';


class Search extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleFormSubmit.bind(this)
    }
    handleFormSubmit(event) {
        console.log('Wartosc search: ' + this.ksiezniczka.value)
        event.preventDefault();
    }
    render() {
        const styleInput = {
            backgroundColor: 'blue'
        };
        return <div>
            <form onSubmit={this.handleSubmit}>
                <input type='text' ref={field => this.ksiezniczka = field}/>
                <input type='submit' style={styleInput} value='Szukaj'/>
            </form>
        </div>
    }
}

    export default Search