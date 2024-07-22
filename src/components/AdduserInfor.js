import React, { useState } from "react";

const AdduserInfor = (props) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('Hoi dan it');
    const [age, setAge] = useState('');

    const handleOnChangeInput = (e) => {
        setName(e.target.value);
    }

    const handleOnChangeAge = (e) => {
        setAge(e.target.value);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + 'random',
            name: name,
            age: age
        });
    }

    return (
        <div>
            My name is {name} and I'm {age}
            <form onSubmit={(e)=>{handleOnSubmit(e)}}>
                <label>Your name: </label>
                <input
                    value={name}
                    type="text"
                    onChange={(e)=>{handleOnChangeInput(e)}}
                />

                <label>Your age: </label>
                <input
                    value={age}
                    onChange={(e)=>{handleOnChangeAge(e)}}
                />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default AdduserInfor;
