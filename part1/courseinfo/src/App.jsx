const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part}, Number of exercises {props.exercises}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.parts.map(part =>
        <Part key={part.name} part={part.name} exercises={part.exercises} />
      )}
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Total of exercises: {props.parts
        .map(part => part.exercises)
        .reduce((sum, current) => sum + current, 0)}
    </p>
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
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App