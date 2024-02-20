import { configureStore } from '@reduxjs/toolkit'
import reducers from './Reducers'

const store = configureStore({
    reducer: reducers,
    devTools: true,
})

export default store