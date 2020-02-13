import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.main};
`

const postPageContent = (
    <div>
        <Title>Hello Vadim</Title>
        <p>
            The best way to deploy your web app is as a static HTML app, if that's possible. With a static app, you can use a fast and efficient web server like NGINX 
            or a cost-effective static hosting service like ZEIT now or GitHub pages.
            But not every app can be deployed as a static app. If your app needs to generate dynamic pages at the runtime, you can't deploy it as a static app.
            If you can categorize your app as a static app, you can build it with Next.js. Next.js 3.0 comes with a feature that allows you to export an app into a set of HTML pages.
            In this lesson, we are going to explore that feature. Let's get started.
        </p>
    </div>
)

 function Post() {
  return <Layout content={postPageContent} />
}

export default Post