import Images from './components/pictures/Images'
import './App.css'

function App() {

  return (
    <>
      <div className='container w-screen p-5 gap-10 lg:mx-auto'>
        <header className='title'>
          <h1 className=' text-3xl text-start font-semibold'>The creative crew</h1>
        </header>
        <section className=' text-start flex flex-col gap-3'>
          <h2 className='font-semibold'>WHO WE ARE</h2>
          <p>We are team of creatively diverse, driven, innovative individuals working in various locations from the world.</p>
        </section>
        <Images/>

      </div>
    </>
  )
}

export default App
