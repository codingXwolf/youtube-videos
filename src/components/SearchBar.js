import React from 'react';

class SearchBar extends React.Component{
    state = { myInput: '' };

    onInputChange = e => {
        this.setState({ myInput: e.target.value});
    };

    onFormSubmit = e => {
        e.preventDefault();

        this.props.onFormSubmit(this.state.myInput)
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                        type="text" 
                        value={this.state.myInput}
                        onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;