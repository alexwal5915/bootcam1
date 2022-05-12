import React from 'react'
import ReactDOM from 'react-dom'
const Titli = (prots) =>{
  return <h1>{prots.cs}</h1>

}
const Part = (prots) =>{
  return <p>{prots.ms} {prots.ns}</p>
}

const App = () => {
  const course = 'Half Stack application development por hoy'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Titli cs={course} />
      <Part ms={part1} ns={exercises1}/>
      <Part ms={part2} ns={exercises2}/>
      <Part ms={part3} ns={exercises3}/>
      <Part ms='number of exercises' ns={exercises1 + exercises2 + exercises3}/>      
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))