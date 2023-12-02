import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { getFirestore, collection, addDoc, onSnapshot } from 'firebase/firestore'
import { messages, message } from "../app/types";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: messages = {
    messages: [],
    loading: false,
    error: null
}

const messagesSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        fetchMessagesStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchMessagesSuccess(state, action: PayloadAction<message[]>) {
            state.messages = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchMessagesFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    }
})

export const {
    fetchMessagesStart,
    fetchMessagesSuccess,
    fetchMessagesFailure,
} = messagesSlice.actions;

export default messagesSlice.reducer;

export const fetchMessages = () => async (dispatch: any) => {
    try {
        dispatch(fetchMessagesStart());
        const firestore = getFirestore();
        const collectionRef = collection(firestore, 'messages');

        const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
            const messages = querySnapshot.docs.map((doc) => doc.data() as message);
            dispatch(fetchMessagesSuccess(messages));
        });

        return () => unsubscribe();
    } catch (error: any) {
        dispatch(fetchMessagesFailure(error.message));
    }
};


export const addMessage = (email: string | null, message: string,) => async () => {
    try {
        const firestore = getFirestore();
        const collectionRef = collection(firestore, 'messages')
        await addDoc(collectionRef, {
            id: new Date().toISOString(),
            email: email,
            message: message,
        });
        console.log('Сообщение успешно добавлено в Firestore')
    } catch (error) {
        console.error('Ошибка при добавлении сообщения в Firestore:', error);
    }
};



export const messagesSelector = (state: RootState) => state.message