import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const indexPageContent = <Title>Main Page</Title>

 function Index() {
  return <Layout content={indexPageContent} />;
}

export default Index