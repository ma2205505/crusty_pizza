import React from 'react'
import Heading from './Heading'
import Pizzaday from './Pizzaday'
import Welcome from './Welcome'
import Review from './Review'
import Menu from './Menu'
import Footer from './Footer'
import Menu1 from './Menu1'

function Home() {
  return (
    <>
      <div>
        <Heading />
        <Pizzaday />
        <Welcome
        about={"The Pizza Menu"}
        welcome={"CHICAGO"}
        crusty={"THIN CRUST"}
        Lorem={"Lorem ipsum dolor sit amet. Ea dignissimos galisum a facere nihil et quia perspiciatis est quis delectus. Sit vitae consectetur id voluptatem incidunt et consequatur obcaecati quo sint autem ut nobis quia ut adipisci iusto"}
      />
      <Review/>
      <Menu/>
      <Menu1/>
      <Footer/>

      </div>
    </>
  )
}

export default Home
