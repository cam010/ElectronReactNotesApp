import { useEffect } from 'react'
import './App.css'

function App() {
  
  useEffect(() => {
    async function fetchNotes() {
      const notes = await window.api.getNotes()
      console.log("Notes: ", notes)
    }

    fetchNotes()
  }, [])

  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  )
}

export default App
