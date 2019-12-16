import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <>
        <h1>{props.course.name}</h1>
        </>
        )
}

const Part = (props) => {
    console.log(props.name)

    return ( props.name + " " + props.exercises
    )
}
const Content = (props) => {
    let vali = ""
    props.parts.parts.forEach(value => {
        vali += Part(value) + "\n"
    })
    const table = vali.split("\n")
    console.log(table)
    
    return (
        <>
            <p> {table[0]}</p>
            <p> {table[1]}</p>
            <p> {table[2]}</p>
        </>
        )
}

const Total = (props) => {
    let sum = 0
    props.parts.parts.forEach(value => {
        sum += value.exercises
    })

    return (
        <>
        <p>Number of exercises {sum}</p>
        </>
    )
}

const App = () => {

    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }
    return (
        <div>
            <Header course={course} />
            <Content parts={course} />
            <Total parts={course} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))