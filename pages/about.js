import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const aboutPageContent = <Title>About page</Title>

 function About() {
  return <Layout content={aboutPageContent} />;
}

export default About