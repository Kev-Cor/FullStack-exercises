import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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

  return(
    <div>
      <h3>Statistics</h3>
      <p>Total reviews: {allReviews}</p>
      <p>Average: {average(good,neutral,bad,allReviews)}</p>
      <p>Percentage: {percentage(good,allReviews)}%</p>
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
          <h3>Feedback</h3>
          <p>Good review: {good}</p>
          <p>Neutral Reviews: {neutral}</p> 
          <p>Bad Reviews: {bad}</p>
          <p>
            <button onClick={handleGood}>Good</button>
            <button onClick={handleNeutral}>Neutral</button>
            <button onClick={handleBad}>Bad</button>
          </p>
          <Statistics good={good} neutral={neutral} bad={bad} allReviews={allReviews} />
      </div>
    </>
  )
}

export default App
