import type { PayloadAction } from '@reduxjs/toolkit';
import type { User } from '../types/User';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { mockLogin, mockSignup } from '../api/mockAuthApi';


interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    token: string | null;
    error: string | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    token: null,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    login(state, action: PayloadAction<any>) {
        state.isAuthenticated = true;
        state.user = action.payload;
    },
    logout(state) {
        state.isAuthenticated = false;
        state.user = null;
    },
    signup(state, action: PayloadAction<any>) {
        state.isAuthenticated = true;
        state.user = action.payload;
    },
    },
});

export const { login, logout, signup } = authSlice.actions;
export default authSlice.reducer;
