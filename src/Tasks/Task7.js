import React, { useState } from "react";
import './styles.css'

export const Task7 = (props) => {
    const [a, setA] = useState('')
    const [b, setB] = useState('')
    const [answer, setAnswer] = useState('')
    const [check, setCheck] = useState('')

    return (
        <div className='center '>
            <h1>Task7</h1>
            <div className='row ' style={{ maxWidth: 600, width: 600, justifyContent: 'center' }}>
                <div className='column'>
                    <input placeholder='Введите перове число' value={a} onChange={e => setA(e.target.value.replace(/[^[0-9.Aa]/, ''))} ></input>
                    <input placeholder='Введите второе число' value={b} onChange={e => setB(e.target.value)} ></input>
                    <input placeholder='Введите ответ' value={answer} onChange={e => setAnswer(e.target.value)} ></input>
                </div>
                <button
                    onClick={() => Number(a) + Number(b) == answer ? setCheck('верно') : setCheck('не верный')}
                >Сложить</button>
            </div>
            Результат:
            <div className='column'>
                {check}
            </div>
        </div>
    )
}
export default Task7