import React from 'react'
import Link from 'next/link';

import styled from 'styled-components'

const Div = styled.div`
  font-size: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
`
const Nav = () => (
    <Div>
        <Link href="/" as="/index">
            <a>Home</a>
        </Link>
        <Link href="/about" as="/about">
            <a>About</a>
        </Link>
        <Link href="/post" as="/post">
            <a>Post</a>
        </Link>
    </Div>
);

export default Nav