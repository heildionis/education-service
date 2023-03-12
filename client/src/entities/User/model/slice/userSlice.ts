import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { checkAuth } from '../services/checkAuth';
import { User, UserSchema } from '../types/user';
import { logout } from '../services/logout';

const initialState: UserSchema = {
    isLoading: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(checkAuth.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(checkAuth.fulfilled, (state, action) => {
                state.isLoading = false;
                state.authData = action.payload.user;
            })
            .addCase(checkAuth.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
            .addCase(logout.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(logout.fulfilled, (state) => {
                state.isLoading = false;
                state.authData = undefined;
            })
            .addCase(logout.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
