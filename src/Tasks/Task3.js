import React, { useState, useEffect } from "react";
import './styles.css'

export const Task3 = (props) => {
    const [x1, setX1] = useState(0.1)
    const [x2, setX2] = useState(1)
    const [n, setN] = useState(80)
    const [h, setH] = useState(0)
    const [result, setResult] = useState([])

    const { pow, cos } = Math

    function factorial(n) {
        return (n != 1) ? n * factorial(n - 1) : 1;
    }

    function calculate() {
        let H
        let a = props.x1 ? props.x1 : x1
        let b = props.x2 ? props.x2 : x2

        if (h === 0) H = Number((b - a) / 10)
        else H = Number(h)
        let x = Number(a)
        let res = []

        while (x <= b) {
            let tmpX = 1
            for (let i = 1; i <= n; i++) {
                const top = calcTop(x, i)
                const bottom = calcBottom(i)
                tmpX += pow(-1, Number(i)) * (top / bottom)
            }
            let y = props.y ? calculatedFunctionController(props.y, x) : cos(x)
            res.push(`при x = ${x} сумма = ${tmpX} Y(x) = ${y}`)
            x += H
        }
        setResult(res)

        function calcTop(x, i) {
            return pow(x, (Number(2) * Number(i)))
        }

        function calcBottom(i) {
            return factorial(Number(2) * Number(i))
        }
    }

    function calculatedFunctionController(selectedFunction, x) {
        switch (selectedFunction) {
            case 0:
                return Math.sinh(x)
            case 1:
                return Math.pow(x, 2)
            case 2:
                return Math.pow(Math.E, x)
            default:
                break
        }
    }

    return (
        <div className='center '>
            {props.y !== undefined ? <></> : <h1>Task3</h1>}
            <div className='row between'>
                {
                    !props.x1 && !props.x2 && (
                        <div className='column'>
                            <label>
                                a
                                <input value={x1} onChange={e => setX1(Number(e.target.value))} type='number' ></input>
                            </label>
                            <label>
                                b
                                <input value={x2} onChange={e => setX2(Number(e.target.value))} type='number' ></input>
                            </label>
                        </div>
                    )
                }
                <div className='column'>
                    <label>
                        n
                        <input value={n} onChange={e => setN(Number(e.target.value))} type='number' ></input>
                    </label>
                    <label>
                        H
                        <input value={h} onChange={e => setH(Number(e.target.value))} type='number' ></input>
                    </label>
                </div>
            </div>
            <button onClick={calculate}>Выполнить</button>
            <div>
                {result.map((i, index) => (
                    <h2 key={index}>{i}</h2>
                ))}
            </div>
        </div>
    )
}
export default Task3