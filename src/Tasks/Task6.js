import React, { useState } from "react";
import './styles.css'

export const Task6 = (props) => {
    const [string, setString] = useState('')
    const [numbers, setNumbers] = useState([])

    const findNumbers = (e) => {
        let str = e.target.value
        // setNumbers(str)
        let arr = []
        
        console.log(str.split(''));
    }

    return (
        <div className='center '>
            <h1>Task6</h1>
            <div className='row ' style={{ maxWidth: 600, width: 600, justifyContent: 'center' }}>
                <div className='column'>
                    <input style={{ width: 400, height: 50 }} placeholder='Введите строку' onChange={findNumbers} ></input>
                </div>
            </div>
            <div>Числа в строке {numbers.map((i, index) => (
                <span style={{ marginRight: 5 }} key={index}>{i}</span>
            ))}</div>
        </div>
    )
}
export default Task6