import Hero from './components/Hero'
import Content from './components/Content'
import './App.css'
import Gaming from './components/Gaming'
import Product from './components/Product'
import Footer from './components/footer'

function App() {

  return (
    <main >
      <div className='case'>
        <Hero />
        <Content />
        <Gaming />
        <Product />
        <Footer />
      </div>
    </main>
  )
}

export default App
