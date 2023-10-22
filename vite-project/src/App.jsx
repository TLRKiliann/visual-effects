import forest from '/images/forest.jpg'
import './App.scss'

function App() {

  return (
    <>
      <div className="container">
        <div className='box'>
          <div className='square square--1'>
            
            <span className='span--eyescircle'>O</span>

            <div className='span--hut'>
              <span className='span--eyeshut hut--one'></span>
              <span className='span--eyeshut hut--two'></span>
              <span className='span--eyeshut hut--three'></span>
            </div>

          </div>

          <div className='square square--2'>
            
            <span className='span--eyescircle'>O</span>
            
            <div className='span--hut'>
              <span className='span--eyeshut hut--one'></span>
              <span className='span--eyeshut hut--two'></span>
              <span className='span--eyeshut hut--three'></span>
            </div>

          </div>
        </div>
        <div className='smile'>
          
          <span className='span--smile external--smile'></span>
          <span className='span--smile'></span>
          <span className='span--smile'></span>
          <span className='span--smile'></span>
          <span className='span--smile external--smile'></span>

        </div>
      </div>
      <span className='span--img'>
        <img src={forest} width="1920" height="1080" alt="forst.jpg" />
      </span>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">
                Home
              </a>
            </li>
            <li>
              <a href="#">
                Shop
              </a>
            </li>
            <li>
              <a href="#">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>

        <section className='section section--1'>
          <article>
            <h2>Title h2</h2>
            <p>Lorem ipsum ...</p>
          </article>
        </section>

        <section className='section section--2'>
          <article>
            <h2>Title h2</h2>
            <p>Lorem ipsum ...</p>
          </article>
        </section>

        <section className='section section--3'>
          <article>
            <h2>Title h2</h2>
            <p>Lorem ipsum ...</p>
          </article>
        </section>

      </main>
      
      <footer>
        <h3>esteban@mail.com</h3>
      </footer>
    </>
  )
}

export default App
