import React, { useState } from "react";
import './styles.css'

export const Task6 = (props) => {
    const [count0, setCount0] = useState([])
    const [count1, setCount1] = useState([])

    const findNumbers = (e) => {
        let str = e.target.value
        let count1 = str.split("0").filter(e => e.length != 0 && (e.length + 1) % 2)
        let count0 = str.split("1").filter(e => e.length != 0 && (e.length + 1) % 2)
        setCount0(count0)
        setCount1(count1)
    }
    return (
        <div className='center '>
            <h1>Task6</h1>
            <div className='row ' style={{ maxWidth: 600, width: 600, justifyContent: 'center' }}>
                <div className='column'>
                    <input style={{ width: 400, height: 50 }} placeholder='Введите строку' onChange={findNumbers} ></input>
                </div>
            </div>
            <div>{count0.map((i, index) => (
                <span style={{ marginRight: 5 }} key={index}>{'[' + i + ']'}</span>
            ))}</div>
            <div>{count1.map((i, index) => (
                <span style={{ marginRight: 5 }} key={index}>{'[' + i + ']'}</span>
            ))}</div>
        </div>
    )
}
export default Task6