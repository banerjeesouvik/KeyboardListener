import React, { createContext, useState } from "react";

const KeypressContext = createContext({});

const {Provider, Consumer: KeypressConsumer} = KeypressContext;

const KeypressProvider = ({children}) => {
  // list of all listeners
  const [state, setState] = useState([]);

  // helper functions to be used by Keypress component

  const add = listener => {
    setState(prevState => [...prevState, listener])
  }
  const remove = id => {
    const newState = state.filter(it => it.id !== id)
    setState(newState)
  }

  return (
  <Provider value={{add, remove, keypressListeners: state}}>
    {children}
  </Provider>
  );
}

export default KeypressContext

export {
    KeypressProvider,
    KeypressConsumer
}