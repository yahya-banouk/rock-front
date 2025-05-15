import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


interface AuthState {
    isAuthenticated: boolean;
    user: any;
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
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
