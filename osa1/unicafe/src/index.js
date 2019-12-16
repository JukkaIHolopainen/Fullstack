import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
        {text}
    </button>
)

const Statistics = (props) => {
    
    return (
        <tr>
            <td>{props.text}</td>
            <td>{props.static}</td>
        </tr>
    )
    
}

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [average, setAverage] = useState(0)
    const [all, setAll] = useState(0)
    const [positive, setPositive] = useState(0 + " %")

    const handleGood = () => {
        setGood(good + 1)
        setAll(all + 1)
        setPositive((good + 1) / (all + 1) * 100 + " %")
        setAverage(((good+1) - bad) / (all + 1))
    }

    const handleBad = () => {
        setBad(bad + 1)
        setAll(all + 1)
        setPositive(good / (all + 1) * 100 + " %")
        setAverage((good - (bad+1)) / (all+1))
    }

    const handleNeutral = () => {
        setNeutral(neutral + 1)
        setAll(all + 1)
        setPositive(good / (all + 1) * 100 + " %")
        setAverage((good - bad) / (all + 1))
    }

    if (all === 0) {
        return (
            <div>
                <div>
                    <h1>give feedback</h1>

                    <Button onClick={handleGood} text='Good' />

                    <Button onClick={handleNeutral} text='Neutral' />

                    <Button onClick={handleBad} text='Bad' />
                    <h1>statistics</h1>
                    <p>no feedback given</p>
                </div>
            </div>
            )
    }
    return (
        <div>
            <div>
                <h1>give feedback</h1>
                
                <Button onClick={handleGood} text='Good' />
                
                <Button onClick={handleNeutral} text='Neutral' />
                
                <Button onClick={handleBad} text='Bad' />
                <h1>statistics</h1>
                <table>
                    <tbody>
                        <Statistics text="good" static={good} all={all}/>
                        <Statistics text="neutral" static={neutral} all={all}/>
                        <Statistics text="bad" static={bad} all={all}/>
                        <Statistics text="all" static={all} all={all}/>
                        <Statistics text="average" static={average} all={all}/>
                        <Statistics text="positive" static={positive} all={all} />
                    </tbody>
                </table>
            </div>
        </div>
    )
        }
        
        ReactDOM.render(
    <App />,
            document.getElementById('root')
        )
