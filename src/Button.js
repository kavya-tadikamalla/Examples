import React from 'react'
function Button(props){
    return (<button onClick={props.onClickFunction}> {props.msgString} </button>);
  }
export default Button  