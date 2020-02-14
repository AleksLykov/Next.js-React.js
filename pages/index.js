import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import { useSelector, useDispatch } from 'react-redux'
import { withRedux } from '../lib/redux'
import * as actions from '../redux/actions'



const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
//hook 
const useCounter = () => {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()

  
  const increment = () =>
    dispatch(actions.increment())

  const decrement = () =>
    dispatch(actions.decrement())

  const reset = () =>
    dispatch(actions.reset())
  return { count, increment, decrement, reset }
}


//Компонента Counter
const Counter = () => {
  const { count, increment, decrement, reset } = useCounter()
  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button type="button" className="btn btn-primary" onClick={increment}>+1</button>
      <button type="button" className="btn btn-success" onClick={decrement}>-1</button>
      <button type="button" className="btn btn-danger" onClick={reset}>Reset</button>
    </div>
  )
}

 function Index() {
 
  return <Layout content={Counter()} />;
}

export default withRedux(Index)