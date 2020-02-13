import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
export default () =>(
  <div>
    <img src='/static/img/log.png' alt="Logo" />
    <p>SHUCO</p>
    <button type="button" className="btn btn-warning">Предупреждение</button>
  </div>
)
