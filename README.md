# Locus Keypress
Utility component to handle keypress event within a component

## usage
```js
  import Keypress from "./keypresslib";

  
  const Component = () => {
    return (
        <div>
            <Keypress
                combo="shift a"
                description="..."
                callback={handleStyleChange}
            />
        </div>
    );
  }
```

Note: The app needs to be wrapper with `KeypressProvider` component at the root of the application, so that all the data regarding the listeners can be observed

Wrap your `App` with this component in your application
```js
  import { KeypressProvider } from "./keypresslib"; // path-to-library


  // inside app
  return (
    <KeypressProvider>
      <App/>
    </KeypressProvider>
  );
```


Add multiple `Keypress` components in a component to set more than one listeners.

## Properties
`combo` : `string(required)` => sets the keyboard shortcut for that specific action
`description`: `string(required)` => sets description of the combo
`callback`: `func(required)` => sets the callback function for that combo, gets triggered when combo gets matched


## `withKeypress`
This is a higher order component that can be used to pass listeners list and handlers to any componnet 

usage:
Wrap your `App` with this component in your application
```js
  import { WithKeypress } from "./react-keypress"; // path-to-library


  // inside app
  return (
    <WithKeypress>
      <App/>
    </WithKeypress>
  );
```
