import React, { useState } from "react";
import Keypress from "../keypresslib"
import {KeypressProvider} from '../provider/KeypressProvider'

import './App.css';
import ListenerList from "../components/ListenerList";

const A = () => {
  const [toggled, setToggled] = useState(false)
  const [blurred, setBlurred] = useState(false)

  const handleToggle = () => {
    setToggled(prev => !prev)
  }

  const handleBlur = () => {
    setBlurred(prev => !prev)
  }

  return (
    <div className={'comp a' + (toggled ? ' olive' : '') + (blurred ? ' blur' : '')}>
      A
      <Keypress
        description="Toggle color of component A"
        combo="shift a"
        callback={handleToggle}
      />
      <Keypress
        description="Blur component A"
        combo="shift x"
        callback={handleBlur}
      />
    </div>
  )
}
  
const B = () => {
  const [toggled, setToggled] = useState(false)

  const handleToggle = () => {
    setToggled(prev => !prev)
  }
  return (
    <div className={'comp b' + (toggled ? ' tomato' : '')}>
      B
      <Keypress
        description="Toggle color of component B"
        combo="shift b"
        callback={handleToggle}
      />
    </div>
  )
}
  
const C = () => {
  const [toggled, setToggled] = useState(false)

  const handleToggle = () => {
    setToggled(prev => !prev)
  }
  return (
    <div className={'comp c' + (toggled ? ' purple' : '')}>
      C
      <Keypress
        description="Toggle color of component c"
        combo="shift c"
        callback={handleToggle}
      />
    </div>
  )
}

function App() {
  return (
    <KeypressProvider>
      <div className="wrapper">
        <A />
        <B />
        <C />
        <ListenerList />
      </div>
    </KeypressProvider>
  );
}

export default App;
