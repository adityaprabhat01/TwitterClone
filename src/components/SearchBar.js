import React from 'react'

class SearchBar extends React.Component {
    render() {
        return (
            <div className="container">
                <form>
                    <label>Search User</label>
                    <input type="text" id="toPost"></input>
                    <button type="button" className="btn btn-primary">
                        Search
                    </button>
                </form>
            </div>
        );
    }
}

export default SearchBar