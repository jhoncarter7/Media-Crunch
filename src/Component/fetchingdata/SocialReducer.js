import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import socialSlice from './SocialSlice'

const store = configureStore({
    reducer: {socialPost: socialSlice.reducer}
}, applyMiddleware(thunk))


export default store