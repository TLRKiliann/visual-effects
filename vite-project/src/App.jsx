import { useState } from 'react'
import forest from '/images/forest.jpg'
import AnimatedEye from './components/AnimatedEyes'
import AnimatedSmile from './components/AnimatedSmile'
import NavBar from './components/NavBar'
import SectionComp from './components/SectionComp'
import DropDownComp from './components/DropDownComp'

function App() {
  const [text] = useState({
    text1: {
      title: "Some text for example One",
      paragraph: "Some text for example One"
    },
    text2: {
      title: "Some text for example Two",
      paragraph: "Some text for example Two"
    },
    text3: {
      title: "Some text for example Three",
      paragraph: "Some text for example Three"
    }
  })

  return (
    <>
      <div className='back--color'>

      </div>
      <div className="container">

        <div className='box'>
          <div className='square square--1'>
            <AnimatedEye />
          </div>

          <div className='square square--2'>
            <AnimatedEye />
          </div>
        
        </div>

        <div className='smile'>
          <AnimatedSmile />
        </div>
      
      </div>
      
      <span className='span--img'>
        <img src={forest} width="1920" height="1080" alt="forst.jpg" />
      </span>

      <header>
        <NavBar />
      </header>

      <main className='main'>

        <div className='main--dropdown'>
          <DropDownComp />
        </div>

        <div className='main--section'>

          <SectionComp
            className='section section--1'
            title={text.text1.title}
            paragraph={text.text1.paragraph}
          />

          <SectionComp
            className='section section--2'
            title={text.text2.title}
            paragraph={text.text2.paragraph}
          />

          <SectionComp
            className='section section--3'
            title={text.text3.title}
            paragraph={text.text3.paragraph}
          />

          <SectionComp
            className='section section--3'
            title={text.text3.title}
            paragraph={text.text3.paragraph}
          />

          <SectionComp
            className='section section--3'
            title={text.text3.title}
            paragraph={text.text3.paragraph}
          />

          <SectionComp
            className='section section--3'
            title={text.text3.title}
            paragraph={text.text3.paragraph}
          />

        </div>

      </main>
      
      <footer>
        <h3>philogenie@protonmail.com</h3>
      </footer>
    </>
  )
}

export default App
