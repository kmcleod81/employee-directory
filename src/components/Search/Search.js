import React from "react";
import "./Search.css";


export default function Search(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <form className="form-inline">
                <input
                    className="form-control mr-sm-2"
                    onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="search"
          placeholder="Search by Name"
          id="search"
                />
                <button onClick={props.handleFormSubmit}
                    className="btn btn-secondary my-2 my-sm-0"
                    type="submit">
                    Search
                    </button>
            </form>
        </nav>
    );
}