import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>{props.stat}</th>
          <td>{props.value}</td>
        </tr>
      </tbody>
    </table>
  )
}

const Statistics = ({ good,neutral,bad,allReviews }) => {
  const average = (good,neutral,bad,allReviews) => {
    let pos=good*1
    let net=neutral*0
    let neg=bad*-1
    let total=allReviews
    return (pos+net+neg)/total
  }

  const percentage = (good,allReviews) => {
    return (good/allReviews)*100
  }

  if (allReviews == 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return(
    <div>
      <h3>Statistics</h3>
      <StatisticLine stat='Good Review' value={good}/>
      <StatisticLine stat='Neutral Review' value={neutral}/>
      <StatisticLine stat='Bad Review' value={bad}/>
      <StatisticLine stat='Total Reviews' value={allReviews}/>
      <StatisticLine stat='Average' value={average(good,neutral,bad,allReviews)}/>
      <StatisticLine stat='Positive (%)' value={percentage(good,allReviews)}/>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allReviews, setAll] = useState(0)

  const handleGood = () => {
    setGood(good+1)
    setAll(allReviews+1)
  }
  const handleNeutral = () => {
    setNeutral(neutral+1)
    setAll(allReviews+1)
  }
  const handleBad = () => {
    setBad(bad+1)
    setAll(allReviews+1)
  }

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
          <h3>Give Feedback</h3>
          <p>
            <Button onClick={handleGood} text='Good'/>
            <Button onClick={handleNeutral} text='Neutral'/>
            <Button onClick={handleBad} text='Bad'/>
          </p>
          <Statistics good={good} neutral={neutral} bad={bad} allReviews={allReviews} />
      </div>
    </>
  )
}

export default App
