
import type { User, userRole } from '../types/User';
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

export const loginUser = createAsyncThunk<
    { token: string; user: User }, // return type
    { username: string; password: string }, // argument type
    { rejectValue: string }
    >('auth/loginUser', async ({ username, password }, thunkAPI) => {
        try {
            return await mockLogin(username, password);
            } catch (e: any) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const signupUser = createAsyncThunk<
    void, // return type
    { username: string; password: string; role: userRole, email: string }, // argument type
    { rejectValue: string }
    >('auth/signupUser', async ({ username, password, role, email }, thunkAPI) => {
    try {
        await mockSignup(username, password, role, email);
    } catch (e: any) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
        },  
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isAuthenticated = true;
                state.error = null;
            })        
            .addCase(loginUser.rejected, (state, action) => {
                state.error = action.payload ?? null;
            })
            .addCase(signupUser.fulfilled, (state) => {
                state.error = null;
            })
            .addCase(signupUser.rejected, (state, action) => {
                state.error = action.payload ?? null;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;