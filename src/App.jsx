import { useState } from 'react'
import './App.css'
import Card from './components/Card'
function App() {
  return (
    <>
    <div className='flex justify-center items-center h-screen'>
      <Card name="Sarah Dole" designation="Front End Engineer @ Microsoft" message="i turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer"/>
    </div>
    </>
  )
}
export default App