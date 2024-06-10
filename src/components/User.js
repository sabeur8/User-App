import React from "react";


const User = (props) => {
    
    return (
        <tr>
    <td className='user'> {props.data["summary"]} </td>
    <td className='user'> {props.data["EmailAdress"]} </td>
    <td className='user'> {props.data["phonenumber"]} </td>
    <td className='user'> {props.data["location"]} </td>
    <td className='user'> {props.data["tags"]} </td>
        </tr>
    );
};

export default User;