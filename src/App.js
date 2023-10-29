import './App.css'
import Axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  const [generatedExcuse, setGeneratedExcuse] = useState('')
  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`).then(
      (res) => {
        setGeneratedExcuse(res.data[0].excuse)
      }
    )
  }

  return (
    <div className="App">
      <h1>Generate an Excuse</h1>
      <button
        onClick={() => {
          fetchExcuse('party')
        }}
      >
        Party
      </button>
      <br />
      <button
        onClick={() => {
          fetchExcuse('family')
        }}
      >
        Family
      </button>
      <br />
      <button
        onClick={() => {
          fetchExcuse('office')
        }}
      >
        Office
      </button>
      <h4>{generatedExcuse}</h4>
    </div>
  )
}

export default App
