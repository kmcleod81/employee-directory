import React from 'react';
import './Table.css';

function Table() {
    return (
        <div className="Table">
            <table className="table">
                <Table-header />
                <Table-data />
            </table>
        </div >
    );
}

export default Table;
