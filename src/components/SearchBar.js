import React from 'react'

class SearchBar extends React.Component {

    state = { searchName: '' }

    onSearch = (event) => {
        event.preventDefault()
        this.props.onSearch(this.state.searchName)
    }

    render() {
        return (
            <div className="container">
                <form>
                    <label>Search User</label>
                    <input type="text" id="toSearch" onChange={(event) => {this.setState({ searchName: event.target.value })}}></input>
                    <button type="button" className="btn btn-primary" onClick={this.onSearch}>
                        Search
                    </button>
                </form>
            </div>
        );
    }
}

export default SearchBar