import React, { useState } from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

function Table() {
    const [users, setUsers] = useState(null);
    if (!users) {

        fetch('https://randomuser.me/api/?results=30')
            .then(res => {
                res.json().then(json => {
                    //console.log(json)
                    setUsers(json.results)
                    console.log(json.results)
                })
            })
    }
    return (
        <table className='table'>
            <TableHeader headings={['', 'Name', 'Phone', 'Email', 'DOB']} />
            {
                users && (
                    users.map(item => {
                        let date = new Date(item.dob.date);
                        let dateStr = date.toLocaleDateString();

                        return <TableRow imgSrc={item.picture.thumbnail}
                            name={`${item.name.first} ${item.name.last}`}
                            phone={item.phone}
                            email={item.email}
                            dob={dateStr} />
                    })
                )
            }
        </table>
    );
}

export default Table;