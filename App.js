import * as React from 'react'

import { Provider } from 'react-redux'

import ReduxMain from './ReduxToolkit/ReduxMain'

import { store } from './ReduxToolkit/Store'


export default function App(){
    console.log(store.getState())
    return(
        <Provider store={store}>
            <ReduxMain/>
        </Provider>
      
    )
}
