import React, { Component } from 'react'

export default class Navbar extends Component {
    handleFormSubmit = (event) => {
        event.preventDefault()
    }
    render() {

        return (
            <nav class="navbar fixed-top container">
                <form class="w-100 " role="search" onSubmit={this.handleFormSubmit}>
                    <input class="form-control me-2 bg-dark text-primary" type="search" placeholder="Kelime Ara"
                        aria-label="Search" onChange={this.props.searchWordProp} />
                </form>
            </nav>
        );
    }
}


