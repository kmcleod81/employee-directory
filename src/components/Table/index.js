import React, { useState, useEffect } from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import Search from '../Search';



function Table() {
    const [users, setUsers] = useState([]);
    const [filterUsers, setFilterUsers] = useState([]);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=30')
            .then(res => {
                res.json().then(json => {
                    //console.log(json)
                    setUsers(json.results)
                    setFilterUsers(json.results)
                })
            })
    }, [])

    const handleSearch = (event) => {
        console.log(event.target.value)
        const updatedUsers = users.filter(user => {
            const name = user.name.first + " " + user.name.last
            console.log(name)
            return name.indexOf(event.target.value) !== -1
        })
        setFilterUsers(updatedUsers)
    }

    // Tutor helped getting this to work
    const onSort = () => {
        console.log('ghjhgj')
        const sortedUsers = users.sort((a, b) => {
            if (a.name.first < b.name.first) {
                return -1;
            } else {
                return 1;
            }
        })
        console.log(sortedUsers)
        setFilterUsers(sortedUsers)
    }

    return (
        <div>
            <Search onSearchChange={handleSearch} onSortClick={onSort} />
            <table className='table'>
                <TableHeader headers={['', 'Name', 'Phone', 'Email', 'DOB']} />
                {
                    filterUsers && (
                        filterUsers.map(item => {
                            let date = new Date(item.dob.date);
                            let dateStr = date.toLocaleDateString();

                            return <TableRow key={item.email} imgSrc={item.picture.thumbnail}
                                name={`${item.name.first} ${item.name.last}`}
                                phone={item.phone}
                                email={item.email}
                                dob={dateStr} />
                        })
                    )
                }
            </table>
        </div>
    );
}

export default Table;