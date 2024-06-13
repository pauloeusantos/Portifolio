import { useState } from 'react'

import './App.css'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
      <section className='container'>
        <div className='apresentacao'>
          <p>
            Olá, sou <br/>
            <span>Sandra Alves</span> <br/>
            Dev Full Stack
          </p>
          <button className='btn btn-red'>
            Saiba mais sobre mim
          </button>
        </div>
        <figure>
          <img className='img-home' src="/developer-red.svg" alt="Imagem de Home" />
        </figure>
      </section>
     <Footer/>
    </>
  )
}

export default App
