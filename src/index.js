import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import api from './middleware/api'
import reducer from './reducers'
import App from './containers/App'

const history = createHistory()
const router_middleware = routerMiddleware(history)
const store = createStore(
    reducer,
    applyMiddleware(router_middleware, thunk, api, logger)
)
console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)
