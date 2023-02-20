import { configureStore } from '@reduxjs/toolkit'

import socialSlice from './SocialSlice'

const store = configureStore({
    reducer: {socialPost: socialSlice.reducer}
})


export default store