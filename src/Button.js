import React from 'react'

const Button = (props) => {
    return (
        <div>
            <button onClick={props.onClick}>Generate Random</button>
        </div>
    )
}

export default Button