import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/userSlice'
import messageReducer from '../features/messagesSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        message: messageReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch