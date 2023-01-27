import React, {useState} from 'react'

const StateCounter = () => {

    const [count, setCount] = useState(400)

    const onIncrement = () => {
        setCount(count + 1)
    }

    const onDecrement = () => {
        setCount(count - 1)
    }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={onIncrement} >+</button>
        <button onClick={onDecrement} >-</button>
    </div>
  )
}

export default StateCounter