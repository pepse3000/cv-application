import { useState } from 'react'
import Redactor from './components/Redactor'
import CVMain from './components/CV'
import { defaultInfo } from './assets/defaultInfo'
import './App.css'


function App() {
  const [info, setInfo] = useState({ ...defaultInfo });
  document.body.className = info.currentTheme;

  return (
    <>
      <Redactor info={info} setInfo={setInfo} />
      <CVMain info={info} />
    </>
  )
}

export default App
