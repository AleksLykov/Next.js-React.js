import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import { useSelector, useDispatch } from 'react-redux'
import { withRedux } from '../lib/redux'



const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const useCounter = () => {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()
  const increment = () =>
    dispatch({
      type: 'INCREMENT',
    })
  const decrement = () =>
    dispatch({
      type: 'DECREMENT',
    })
  const reset = () =>
    dispatch({
      type: 'RESET',
    })
  return { count, increment, decrement, reset }
}
const Counter = () => {
  const { count, increment, decrement, reset } = useCounter()
  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

 function Index() {
  const indexPageContent = <Title>Main Page</Title>
 
 
  return <Layout content={Counter()} />;
}

export default withRedux(Index)