import React, { useEffect, useState } from "react";

const DisplayInfor = (props) => {
    const { listUsers, handleDeleteUser } = props;
    const [isShowHideListUser, setShowHideListUsers] = useState(true);

    const handleShowHideListUser = () => {
        setShowHideListUsers(!isShowHideListUser);
    }
    console.log("render")
    useEffect(
        () => {
            if (listUsers.length === 0) {
                alert('xoa het roi')
            }
            console.log('Effect')
        }, [listUsers]
    )

    return (
        <div className="display-infor-container">
            <div>
                <span onClick={() => { handleShowHideListUser() }}>
                    {isShowHideListUser ? 'Hide List Users' : 'Show List Users'}
                </span>
            </div>
            {isShowHideListUser &&
                <>
                    {listUsers.map((user, index) => {
                        return (
                            <div key={user.id} className={+user.age > 18 ? 'green' : 'red'}>
                                <div>
                                    <div>My name's {user.name}</div>
                                    <div>My age's {user.age}</div>
                                </div>
                                <div>
                                    <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                                </div>
                                <hr />
                            </div>
                        );
                    })}
                </>
            }
        </div>
    );
}

export default DisplayInfor;
