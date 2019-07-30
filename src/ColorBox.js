import React from 'react'

const ColorBox = (props) => {
    return (
        <div onClick = {props.colorChange} style= {props.style}></div>
    )
}

export default ColorBox