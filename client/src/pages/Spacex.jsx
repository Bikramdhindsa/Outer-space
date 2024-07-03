import React from 'react'
import Header from '../components/Header'
import Sparkles from 'react-sparkle'
import '../pages/css/Home.css' 
import spaceXImage from '../images/Spaceximage.png'
import SpaceX from '../components/SpaceX'
import AllLaunches from '../components/AllLaunches'


export default function Spacex() {
    return (
        <> 
            <section className='snap'>
            <Sparkles
              color="white"
              count={100}
              minSize={2}
              maxSize={10}
              overflowPx={0}
              fadeOutSpeed={5}
              newSparkleOnFadeOut={true}
              flickerSpeed={'normal'}
              flicker={false}
            />
                <Header />
                <div className="spacex-logo">
                    <img src={spaceXImage} alt="SpaceX Rocket" className="spacex-rocket" />
                    <h1 className="spacex-text">SpaceX</h1>
                    <p className="slogan">Making Humanity Multiplanetary</p>
                </div>
                
            </section>
          
            <section className='snap' >
               <SpaceX />
            </section>
            <section id='long'>
               <AllLaunches />
            </section>
        </>
      )
}
