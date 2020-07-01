import React from 'react'

class SearchBar extends React.Component {

    state = { searchName: '' }

    onSearch = (event) => {
        event.preventDefault()
        this.props.onSearch(this.state.searchName)
    }

    myProfile = (event) => {
        event.preventDefault()
        this.props.myProfile(event)
    }

    render() {
        return (
            <div className="container">
                <div class="mx-auto pt-2" style={{ maxWidth: "600px" }}>
                    <div class="input-group-prepend">
                        <input class="form-control" placeholder="Name" type="text" style={{ borderRadius: "75px" }} onChange={(event) => { this.setState({ searchName: event.target.value }) }} />
                        <button className="btn btn-primary ml-2 border-0" onClick={this.onSearch} style={{ borderRadius: "75px", backgroundColor: "#1DA1F2" }}>Search</button>
                        <button class="btn btn-primary fixed-top border-0 ml-1" onClick={this.myProfile} style={{ borderRadius: "75px", backgroundColor: "#1DA1F2" }}>Profile</button>
                    </div>
                </div>

            </div>
        );
    }
}

export default SearchBar