import React, { useContext } from 'react';
import UserData from '../../utils/DataContext';
import "./Search.css";


const Search = () => {
    const context = useContext(UserData);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <form className="form-inline">
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search by Name"
                    aria-label="Search"
                    onChange={e => context.handleSearchChange(e)} />
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    )
};

export default Search;
