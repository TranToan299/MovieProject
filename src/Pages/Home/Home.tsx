import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <>
    <section className='movie-carousel'>
    Carousel
    </section>
    <section className='list-movie' id='list-movie' style={{height:'500px'}}>
    Movie
    </section>
    <section className='cine-station' id='cine-station' style={{height:'500px'}}>
    Cụm rạp
    </section>
    <section className='movie-news' id='movie-news' style={{height:'500px'}}>
      News
    </section>
    <section className='adv-app-mobile' id='adv-app-mobile' style={{height:'500px'}}>
      App
    </section>
    
    </>
  )
}

export default Home