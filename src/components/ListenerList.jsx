import React from 'react'
import withKeyPress from './withKeypress'

const ListenerList = ({keypressListeners}) => {
    return (
        <div className='list'>
            <h3>Active listeners</h3>
            <ul>
                {
                    keypressListeners.map(item => <li key={item.id}>{item.combo} - {item.description}</li>)
                }
            </ul>
        </div>
    )
}

export default withKeyPress(ListenerList)