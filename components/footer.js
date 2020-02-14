import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default () => (
  <div className="container">
      <div className="row justify-content-md-center">
        <p>&copy; Copyrights <strong>Malgin Vadim</strong>. All Rights Reserved</p>
      </div>
      <div class="row justify-content-md-center"> 
        <div>
          Created with Malgin Vadim template by <a href="https://yandex.ru/">Malgin Vadim</a>
        </div>
      </div>  
  </div>
)
