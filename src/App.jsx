import './App.css'
import Form from './components/Form/Form'

const App = () => {

  return (
    <main>
      <h1>movies-app</h1>
      <h2>Find your favorites series and movies</h2>

      <section>
        <Form />
        {/* list */}
      </section>

      {
        console.log('hola apikey', import.meta.env.VITE_API_KEY)
      }

    </main>
  )
}

export default App
