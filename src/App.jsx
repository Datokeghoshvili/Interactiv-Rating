import { useState } from 'react'
import './App.css'
import Rate from './Components/Rate/Rate'
import Result from './Components/Result/Result'


function App() {
  const [number, setNumber]= useState()

  const [submit, setSubmit] = useState(false)
  console.log(submit)

  return (
    <>
      {/* <Rate setSubmit ={setSubmit}/>
      <Result/> */}
      {submit?       <Result number ={number}/> : <Rate number={number} setNumber ={setNumber} setSubmit ={setSubmit}/>
}
    </>
  )
}

export default App
