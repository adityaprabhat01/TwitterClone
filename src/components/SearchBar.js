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
                <div class="col-6">
                    <div class="input-group-prepend">
                        <input class="form-control" placeholder="Name" type="text" id="toSearch" onChange={(event) => { this.setState({ searchName: event.target.value }) }}></input>
                        <button type="button" className="btn btn-primary" onClick={this.onSearch} style={{marginLeft: "2rem"}}>
                            Search
                    </button>
                    </div>

                </div>

            </div>
        );
    }
}

export default SearchBar