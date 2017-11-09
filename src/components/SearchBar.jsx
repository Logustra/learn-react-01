import React, { Component } from 'react';
import { Form, FormControl, FormGroup, InputGroup, Glyphicon } from 'react-bootstrap';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        };
    }

    onInputChange (query) {
        this.setState({query});
    }

    render() {
        return (
            <Form>
                <FormGroup>
                    <InputGroup>
                        <FormControl 
                            value={this.state.query}
                            onChange={event => this.onInputChange(event.target.value)}
                            onKeyPress={event => {
                                if (event.key === "Enter") {
                                    event.preventDefault();
                                    this.props.onSearch(this.state.query);
                                }
                            }} 
                            type="text" 
                            placeholder="Search Your Favorite Video..." 
                        />

                        <InputGroup.Addon onClick={() => this.props.onSearch(this.state.query)}>
                            <Glyphicon glyph="search" />
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
            </Form>
        )
    }
}

export default SearchBar;