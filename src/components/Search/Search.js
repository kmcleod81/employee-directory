import React from "react";
import "./Search.css";


export default function Search() {
    return (
        <div className="searchbox">
            <form className="form-inline">
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
                <button
                    className="btn btn-secondary my-2 my-sm-0"
                    type="submit">
                    Search
                    </button>
            </form>
        </div >
    );
}