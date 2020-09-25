import React from 'react';

const userInput = (props) =>{
    const inStyle = {
        border: '2px solid green'
    };
    return <input type="text" style={inStyle} onChange = {props.changed} value = {props.currentName}/>
};

export default userInput;