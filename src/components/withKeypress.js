import React, {Component} from 'react'
import {KeypressConsumer} from '../provider/KeypressProvider'

const withKeyPress = (C) => {
    const displayName = `withKeyPress__${C.displayName}`
    class Comp extends Component{
        render() {
            return (
                <KeypressConsumer>
                    {
                        (values) => <C {...values} />
                    }
                </KeypressConsumer>
            )
        }
    }

    Comp.displayName = displayName
    return Comp
}

export default withKeyPress