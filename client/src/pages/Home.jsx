import React from 'react'
import Header from '../components/Header'
import Sparkles from 'react-sparkle'
import PictureOfDay from '../components/PictureOfDay'
import Moon from '../components/Moon'
import Mars from '../components/Mars'
import '../pages/css/Home.css' 
import astroImage from '../images/astro.png'


export default function Home() {
  return (
    <> 
        <section className='snap'>
        <Sparkles
          color="white"
          count={100}
          minSize={2}
          maxSize={7}
          overflowPx={0}
          fadeOutSpeed={5}
          newSparkleOnFadeOut={true}
          flickerSpeed={'normal'}
          flicker={false}
        />
            <Header />
            <div className="nasa-logo">
              <img src={astroImage} alt="Astronaut" className="astronaut" />
              <h1 className="nasa-text">NASA</h1>
              <p className="slogan">sky is not the limit</p>
             </div>
            
        </section>
      
        <section className='snap'>
           <PictureOfDay />
        </section>
        <section className='snap'>
          <Moon />
        </section>
        <section className='snap'>
           <Mars />
        </section>
    </>
  )
}
