import React, { useState } from "react";
import './styles.css'
import Task3 from "./Task3";

export const Task5 = () => {
    const [fx, setfx] = React.useState(0)
    const [x1, setX1] = useState(0.1)
    const [x2, setX2] = useState(1)

    return (
        <div className='center'>
            <h1>Task5</h1>
            <div className='column'>
                <label>
                    x1
                    <input value={x1} onChange={e => setX1(Number(e.target.value))} type='number' ></input>
                </label>
                <label>
                    x2
                    <input value={x2} onChange={e => setX2(Number(e.target.value))} type='number' ></input>
                </label>
            </div>
            <div className='column'>
                <div className='row'>
                    <label>sh(x)</label>
                    <input checked={fx === 0} onChange={e => !!e.target.value && setfx(0)} type='checkbox' ></input>
                </div>
                <div className='row'>
                    <label>x^2</label>
                    <input checked={fx === 1} onChange={e => !!e.target.value && setfx(1)} type='checkbox' ></input>
                </div>
                <div className='row'>
                    <label>e^x<input checked={fx === 2} onChange={e => !!e.target.value && setfx(2)} type='checkbox' /> </label>
                </div>
            </div>
            <Task3
                y={fx}
                x1={x1}
                x2={x2}
            />
        </div>
    )
}
export default Task5