import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Header = (props) => {
  return(
    <h1>{props.title}</h1>
  )
}

const Parts = (props) => {
  return(
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Contents = (props) => {
  return(
    <div>
      <Parts part={props.part1} exercises={props.exercises1}/>
      <Parts part={props.part2} exercises={props.exercises2}/>
      <Parts part={props.part3} exercises={props.exercises3}/>
    </div>
  )
}

const Total = (props) => {
  return(
    <p>Number of exercises {props.a + props.b + props.c}</p>
  )
}

function App() {
  const [count, setCount] = useState(0)

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <Header title={course} />
        <Contents 
        part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3}
        />
        <Total a={exercises1} b={exercises2} c={exercises3}/>
      </div>
    </>
  )
}

export default App
