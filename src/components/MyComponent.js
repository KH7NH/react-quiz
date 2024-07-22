import React, { useState } from "react";
import AdduserInfor from "./AdduserInfor";
import DisplayInfor from './DisplayInfor';

const MyComponent = (props) => {
    const [listUsers, setListUsers] = useState([
        { id: '1', name: 'HDK', age: '16' },
        { id: '2', name: 'HDK', age: '18' },
        { id: '3', name: 'HDK', age: '26' }
    ]);

    const handleAddNewUser = (userObj) => {
        setListUsers([userObj, ...listUsers]);
    };

    const handleDeleteUser = (userId) => {
        const listUserClone = listUsers.filter(item => item.id !== userId);
        setListUsers(listUserClone);
    };

    return (
        <>
            <br />
            <div className="a">
                <AdduserInfor handleAddNewUser={handleAddNewUser} />
                <br /><br />
                <DisplayInfor listUsers={listUsers} handleDeleteUser={handleDeleteUser} />
            </div>
            <div className="b"></div>
        </>
    );
}

export default MyComponent;
