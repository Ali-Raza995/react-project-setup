import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { setLoading } from '../loader/loader-slice';
import Toast from '../../components/shared/toast';
import { RootState } from '../store';
import { postApi } from '../../utils/api';
import { REQUEST_STATUS } from '../../constants';
import { setUser, updateUserField } from '../auth/auth-slice';

type ChatBotPayload = {
    userId?: string;
};

export const createChatbot = createAsyncThunk(
    'chatbot/createChatbot',
    async ({ userId }: ChatBotPayload, { rejectWithValue, dispatch }) => {
        try {
            dispatch(setLoading(true));
            const response = await postApi('/chatbot/create-chatbot', { userId });
            if (!response.message) {
                const data = await response.json();
                Toast('error', data.message);
                return rejectWithValue({ error: data.message });
            } else {
                // Will update this after implementing persist

                // dispatch(updateUserField({ key: "chatbotId", value: response?.chatbotId }));
                localStorage.setItem('chatbotId', response?.chatbotId )
                Toast('success', response.message);
                return response;
            }
        } catch (error: any) {
            Toast('error', error?.response?.data?.message);
            return rejectWithValue(error);
        } finally {
            dispatch(setLoading(false));
        }
    }
);

interface ChatBotState {
    chatbot: any;
    error: string | null;
    status: string;
}

const initialState: ChatBotState = {
    chatbot: null,
    error: null,
    status: REQUEST_STATUS.IDLE
};

const chatBotSlice = createSlice({
    name: 'chatbot',
    initialState,
    reducers: {
        setChatBot(state, action: PayloadAction<any>) {
            state.chatbot = action.payload;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createChatbot.pending, (state) => {
                state.status = REQUEST_STATUS.PENDING;
            })
            .addCase(createChatbot.fulfilled, (state, action) => {
                state.status = REQUEST_STATUS.SUCCEEDED;
                state.chatbot = action.payload;
            })
            .addCase(createChatbot.rejected, (state, action: any) => {
                state.status = REQUEST_STATUS.FAILED;
                state.error = action.payload?.error;
            });
    }
});

export const { setChatBot } = chatBotSlice.actions;

export default chatBotSlice.reducer;
