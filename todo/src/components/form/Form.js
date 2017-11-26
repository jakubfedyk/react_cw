import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.handleTitle = this.handleFormTitle.bind(this);
        this.handleContent = this.handleFormContent.bind(this);
        this.handleSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            title: '',
            content: 'Loremsadsad',
            category: 'books'
        };

    }

    handleFormSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }


    handleFormTitle(event) {
        this.setState({
            title: event.target.value
        })
    }

    handleFormContent(event) {
        this.setState({
            content: event.target.value
        })
    }


    render() {

        return <div>
            <h3>{this.state.title ? "Promocja " + this.state.title : 'Nie ma niczego'} </h3>
            <p>{this.state.content} </p>
            <p>Kategoria: {this.state.category} </p>
            <form onSubmit={this.state}>
                <label>Name:
                    <input type='text' onChange={this.handleTitle}/></label>
                <textarea onChange={this.handleContent}/>
                <select>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>
                <input type='submit' value='Wyslij mnie prosze'/>
            </form>
        </div>
    }
}


export default Form;