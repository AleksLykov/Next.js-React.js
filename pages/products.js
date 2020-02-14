import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const productPageContent = <Title>Products</Title>

 function Products() {
  return <Layout content={productPageContent} />;
}

export default Products