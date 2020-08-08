import React from 'react';

function TableRow(props) {
    const { imgSrc,
        name,
        phone,
        email,
        dob } = props
    //console.log(imgSrc)
    return (<tr>
        <td><img src={imgSrc} alt={name} /></td>
        <td>{name}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <td>{dob}</td>
    </tr>
    );
}

export default TableRow;