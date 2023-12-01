import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { user } from "../app/types";
import { RootState } from "../app/store";

const initialState: user = {
    email: null,
    token: null,
    id: null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<user>) => {
            state.email = action.payload.email
            state.id = action.payload.id
            state.token = action.payload.token
        },

        removeUser: (state) => {
            state.email = null
            state.token = null
            state.id = null
        }
    }
})

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;

export const userSelector = (state: RootState) => state.user;