import React, { useState } from "react"

export const Counter = (props) => {
    // const [value, setCount] = useState(props.value)
    const {value} = props
    const formatValue = () => {
        return value === 0 ? "empty" : value
    }
    
    const getBadgedClasses = () => {
    let classes = 'badge m-2 '
    classes += value === 0 ? "bg-warning" : "bg-primary"
    return classes
    }


    return (
        <div>
        <span>{props.name}</span>
        <span className={getBadgedClasses()}>{formatValue()}</span>
        <button className="btn bg-primary m-2 btn-sm" onClick={() => props.onIncrement(props.id)}>+</button>
        <button className="btn bg-primary m-2 btn-sm" onClick={() => props.onDecrement(props.id)}>-</button>
        <button className="btn bg-danger m-2 btn-sm" onClick={() => props.onDelete(props.id)}>Delete</button>
        </div>
    )
}