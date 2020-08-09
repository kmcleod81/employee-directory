import React from 'react';
import "./Search.css";


const Search = ({ onSearchChange, onSortClick }) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <form className="form-inline">
                <input
                    className="form-control mr-sm-2"
                    id="searching"
                    type="search"
                    placeholder="Search by Name - Case Sensative"
                    aria-label="Search"
                    onChange={onSearchChange} />
                <button className="btn btn-secondary my-2 my-sm-0" onClick={onSortClick} type="button">Sort By Name</button>
            </form>
        </nav>
    )
};

export default Search;