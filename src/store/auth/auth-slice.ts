import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { setLoading } from '../loader/loader-slice';
import Toast from '../../components/shared/toast';
import { RootState } from '../store';
import { postApi } from '../../utils/api';
import { REQUEST_STATUS } from '../../constants';

type AuthPayload = {
    email?: string;
};

export const login = createAsyncThunk('auth/login', async ({ email }: AuthPayload, { rejectWithValue, dispatch }) => {
    try {
        dispatch(setLoading(true));
        const response = await postApi('/login', { email });
        if (!response.message) {
            const data = await response.json();
            Toast('error', data.message);
            return rejectWithValue({ error: data.message });
        } else {
            Toast('success', response.message);
            return response;
        }
    } catch (error: any) {
        Toast('error', error?.response?.data?.message);
        return rejectWithValue(error);
    } finally {
        dispatch(setLoading(false));
    }
});

export const signup = createAsyncThunk('auth/signup', async ({ email }: AuthPayload, { rejectWithValue, dispatch }) => {
    try {
        dispatch(setLoading(true));
        const response = await postApi('/send-magic-link', { email });
        if (!response.message) {
            const data = await response.json();
            Toast('error', data.message);
            return rejectWithValue({ error: data.message });
        } else {
            Toast('success', response.message);
            return response;
        }
    } catch (error: any) {
        console.log('error', error);
        Toast('error', error?.response?.data?.message);
        return rejectWithValue(error);
    } finally {
        dispatch(setLoading(false));
    }
});

export const googleSignUp = createAsyncThunk('auth/googleSignUp', async (_, { rejectWithValue, dispatch }) => {
    try {
        dispatch(setLoading(true));
        const response = await fetch('http://localhost:5000/api/signup/google');
        const data = await response.json();
        if (data.data?.url) {
            window.location.href = data.data.url;
            return data;
        } else {
            Toast('error', data.message);
            return rejectWithValue({ error: data.message });
        }
    } catch (error: any) {
        Toast('error', error?.response?.data?.message);
        return rejectWithValue(error);
    } finally {
        dispatch(setLoading(false));
    }
});

interface AuthState {
    user: any;
    error: string | null;
    status: string;
}

const initialState: AuthState = {
    user: null,
    error: null,
    status: REQUEST_STATUS.IDLE
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<any>) {
            state.user = action.payload;
            state.error = null;
        },
        updateUserField(state, action: PayloadAction<{ key: string; value: any }>) {
            if (state.user) {
                state.user[action.payload.key] = action.payload.value;
            }
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
            })
            .addCase(signup.pending, (state) => {
                state.status = REQUEST_STATUS.PENDING;
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.status = REQUEST_STATUS.SUCCEEDED;
                state.user = action.payload;
            })
            .addCase(signup.rejected, (state, action: any) => {
                state.status = REQUEST_STATUS.FAILED;
                state.error = action.payload?.error;
            })
            .addCase(googleSignUp.pending, (state) => {
                state.status = REQUEST_STATUS.PENDING;
            })
            .addCase(googleSignUp.fulfilled, (state, action) => {
                state.status = REQUEST_STATUS.SUCCEEDED;
                // Handle any additional state updates if needed
            })
            .addCase(googleSignUp.rejected, (state, action: any) => {
                state.status = REQUEST_STATUS.FAILED;
                state.error = action.payload?.error;
            });
    }
});

export const { setUser, updateUserField } = authSlice.actions;

export default authSlice.reducer;
