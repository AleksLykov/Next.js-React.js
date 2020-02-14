import React from 'react'
import styled from 'styled-components'

const MainDiv = styled.div`
  color: ${({ theme }) => theme.colors.primary};
`
const Flex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  height: 8%;
`
const BoxPhone = styled.div`
  font-family:  'Courier New', Courier, monospace;
  font-weight: 600;
  font-size: 1rem;
`
const Img = styled.img`
  height: 7rem;
  font-family: 'Courier New', Courier, monospace;
`
const Button = styled.button`
  font-family: 'Marck Script', cursive;
  height: 3rem;
  &:hover {
    color: red;
  }
`
const H1 = styled.h1`
  margin:0;
  padding: 0;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
`
export default () =>(
  <MainDiv className='container-fluid'>
    <Flex>
      <Img src='/static/img/logo.jpg' alt="Logo" />
      <H1>Okna Premium class</H1>
      <BoxPhone>
        <p>Контакты офиса  продаж  +7(911)-111-11-11</p>
        <p>Контакты отдела замеров +7(922)-222-22-22</p>
      </BoxPhone>
      <Button type="button" className="btn btn-dark main-">Заказать звонок</Button>
    </Flex>
  </MainDiv>
)
