
import React from 'react';

function TableHeader({ headers }) {
    return (
        <thead>
            {headers && (
                headers.map(item => {
                    return <th>{item}</th>
                })
            )}
        </thead>
    );
}

export default TableHeader;