import {createStore, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import Reducer from './reducer'

export default createStore( Reducer, applyMiddleware(promiseMiddleware()) );