import Header from '../components/header'
import Footer from '../components/footer'
import Nav from '../components/nav'
import Head from 'next/head'


const Layout = props => (
  <div >
    <Head>
      <title>Okna Premium</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
      <link href="https://fonts.googleapis.com/css?family=Josefin+Sans|Marck+Script&display=swap" rel="stylesheet"/>
    </Head>
    <Header />
    <Nav />
       {props.content}
    <Footer/>
  </div>
);

export default Layout
