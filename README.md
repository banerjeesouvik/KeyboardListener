# Keypress
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
                callback={handleChange}
            />
        </div>
    );
  }
```

Note: The app needs to be wrapper with `KeypressProvider` component at the root of the application, so that all the data regarding the listeners can be observed

Wrap your `App` with this component in your application
```js
  import { KeypressProvider } from "./keypresslib";


  // inside app
  return (
    <KeypressProvider>
      <App/>
    </KeypressProvider>
  );
```


Add multiple `Keypress` components to set more than one listeners.

## usage
```js
  import Keypress from "./keypresslib";

  
  const Component = () => {
    return (
        <div>
            <Keypress
                combo="shift a"
                description="..."
                callback={handleChange}
            />
            <Keypress
                combo="shift b"
                description="..."
                callback={handleChange}
            />
        </div>
    );
  }
```


## Properties
`combo` : `string(required)` => keyboard shortcut keys using which the action is to be performed

`description`: `string(required)` => description of the combo action

`callback`: `func(required)` => callback function that gets triggered when combo is entered



## `withKeypress`
This is a higher order component that can be used to pass listeners list and handlers to any componnet 

usage:
```js
  import { withKeypress } from "./keypresslib";

  ....
  ....

  export default withKeypress(Component)
```
