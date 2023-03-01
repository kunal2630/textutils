import React from 'react'

export default function  Alert (props) {
  return (
    //if alert string is null then below code will not execute as we have put && which check first condition and if it is true then only it check other statement

    props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
    <strong>{props.alert.type}</strong> : {props.alert.msg}
    
  </div>
    
  )
}
