import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { setLoading } from '../loader/loader-slice';
import Toast from '../../components/shared/toast';
import { RootState } from '../store';
import { postApi } from '../../utils/api';
import { REQUEST_STATUS } from '../../constants';

type AuthPayload = {
    email?: string;
};

export const login = createAsyncThunk(
    'auth/authenticate',
    async ({ email }: AuthPayload, { rejectWithValue, dispatch }) => {
        try {
            dispatch(setLoading(true));
            const response = await postApi('/login', { email });
            console.log('response', response)
            
            if (!response.message) {
                const data = await response.json();
                Toast("error", data.message);
                return rejectWithValue({ error: data.message });
            } else {
                Toast("success", response.message);
                return response;
            }
        } catch (error: any) {
            Toast("error",'Something went wrong');
            return rejectWithValue(error);
        } finally {
            dispatch(setLoading(false));
        }
    }
);

interface AuthState {
    isAuthenticated: boolean;
    user: any;
    error: string | null;
    status: string;
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    error: null,
    status: REQUEST_STATUS.IDLE,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<any>) {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = REQUEST_STATUS.PENDING;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = REQUEST_STATUS.SUCCEEDED;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action: any) => {
                state.status = REQUEST_STATUS.FAILED;
                state.error = action.payload?.error;
            });
    }
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
