import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { postApi } from '../../utils/api';
import { REQUEST_STATUS } from '../../constants';
import Toast from '../../components/shared/toast';

export const uploadDocuments = createAsyncThunk(
    'chatbot/create-assistant',
    async (files: { selectedFiles: File[] }, { rejectWithValue, dispatch }) => {
        const formData = new FormData();
        files.selectedFiles.forEach(file => formData.append('files', file))

        try {
            const response = await postApi('/chatbot/upload-document', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            Toast('success', 'Files uploaded successfully');
            return response;
        } catch (error: any) {
            Toast('error', error.message || 'Failed to upload files');
            return rejectWithValue(error);
        }
    }
);

interface DocumentUploadState {
    status: string;
    progress: number;
    error: string | null;
}

const initialState: DocumentUploadState = {
    status: REQUEST_STATUS.IDLE,
    progress: 0,
    error: null
};

const documentUploadSlice = createSlice({
    name: 'documentUpload',
    initialState,
    reducers: {
        setProgress(state, action: PayloadAction<number>) {
            state.progress = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(uploadDocuments.pending, (state) => {
                state.status = REQUEST_STATUS.PENDING;
                state.progress = 0;
                state.error = null;
            })
            .addCase(uploadDocuments.fulfilled, (state) => {
                state.status = REQUEST_STATUS.SUCCEEDED;
                state.progress = 100;
            })
            .addCase(uploadDocuments.rejected, (state, action: any) => {
                state.status = REQUEST_STATUS.FAILED;
                state.error = action.payload?.error;
                state.progress = 0;
            });
    }
});

export const { setProgress } = documentUploadSlice.actions;

export default documentUploadSlice.reducer;
