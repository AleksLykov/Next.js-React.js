import React from 'react'
import Link from 'next/link';

import styled from 'styled-components'

const Div = styled.div`
  background-color: black;
  color: white;
  font-size: 2rem;
  line-height: 5rem;
  
`
const A = styled.a`
    font-family: 'Marck Script', cursive;
    margin-left: 4rem;
    cursor: pointer;
    &:hover {
        color: red;
    }
  
`
const Box = styled.div`
 margin-left: auto;
`


const Nav = () => (
    <>
        <Div className='container-fluid'>
            <Box>
                <Link href="/" as="/index">
                    <a>Главная</a>
                </Link>
                <Link href="/products" as="/about">
                    <a>Продукция</a>
                </Link>
                <Link href="/about" as="/about">
                    <a>Галерея работ</a>
                </Link>
                <Link href="/contact" as="/contact">
                    <A>Конакты</A>
                </Link>
            </Box>
        </Div>
        <style jsx>{`
            a {  
                font-family: 'Marck Script', cursive;
                margin-left: 4rem;
                cursor: pointer;
                color: white;
            }
            a:hover {
                opacity: 0.6;
            }
        `}</style>
    </>
)

export default Nav