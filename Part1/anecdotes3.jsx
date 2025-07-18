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

function App() {
  const [count, setCount] = useState(0)

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(new Array(anecdotes.length).fill(0))

  const setRandom = () => {
    let min = 0
    let max = 7
    let random = Math.floor(Math.random() * (max - min +1)) + min
    setSelected(random)
  }
  
  const handleVotes = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVote(newVotes)
  }

  const getMostPopular = () => {
    const maxVotes = Math.max(...votes)
    const popularIndex = votes.indexOf(maxVotes)
    return popularIndex
  }
  
  const mostPopular = getMostPopular()

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
        <h3>Anecdote of the day</h3>
        <p>{anecdotes[selected]}</p>
        <p>This anecdote has {votes[selected]} votes</p>
        <Button onClick={handleVotes} text='vote'/>
        <Button onClick={setRandom} text='next anecdote'/>
        <h3>Anecdote with most votes</h3>
        <p>{anecdotes[mostPopular]}</p>
        <p>With {votes[mostPopular]} votes</p>
      </div>
    </>
  )
}

export default App
