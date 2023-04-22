import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Increment,Decrement} from "./component/Reducer/userSlice"

const App = () => {
  

  const counter = useSelector((state) =>
  state.counter.counter);

  const dispatch = useDispatch();
  
  
  

  
  

  
  return(
    <>
    <div className="head">
    <h1> {counter} </h1>
    </div>
    <div className="box">
    <button onClick={() => dispatch(Increment())}>Add</button>
    <button onClick={() => dispatch(Decrement())}>Subtract</button>
    </div>
    </>
  )
  }
export default App
  