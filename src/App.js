import React, { useState } from 'react'

import './App.css';
import UserOutput from './components/UserOutput'
import UserInput from './components/UserInput'


const App = () => {

  const [data, setUserName] = useState({userName: 'Richard'}) 


  const submitHandler = (e) => {
    setUserName({userName: e.target.value})
  }


    return (
      <div>
        <div className="App">
      <UserInput changed= {submitHandler} name1={data.userName}/>
      <UserOutput name1={data.userName} name2={'Michael'}/>
      
    </div>
      </div>
    )

}

export default App

