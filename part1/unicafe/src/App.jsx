import { useState } from 'react'


const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>:</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({ good, neutral, bad }) => {

  const total = good + neutral + bad
  const average = total / 3
  const positive = total === 0 ? 0 : (good / total) * 100

  const boxStyle = {
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: 'black',
    borderRadius: '5px',
    textAlign: 'left',
    display: 'inline-block',
    padding: '10px',
    width: '140px',
    boxSizing: 'border-box'
  }

  if (total === 0) {
    return (
      <div style={{
        ...boxStyle,
        color: 'red'
      }}>
        <p><strong>No Feedback Yet</strong></p>
      </div>
    )
  }

  return (
    <table style={boxStyle}>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average.toFixed(1)} />
        <StatisticLine text="positive" value={positive.toFixed(1)} />
      </tbody>
    </table>
  )

}

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
)

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h2>Give Feedback ^_^</h2>
      <Button text="good" handleClick={handleGoodClick} />
      <Button text="neutral" handleClick={handleNeutralClick} />
      <Button text="bad" handleClick={handleBadClick} />
      <br />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App