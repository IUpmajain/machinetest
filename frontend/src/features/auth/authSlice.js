import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const  userExist = JSON.parse(localStorage.getItem('user'))

const authSlice = createSlice({
    name:"auth",
    initialState:{
        user:userExist ? userExist : null,
        isLoading:false,
        isError:false,
        isSuccess:false,
        message:""
    },
    reducers:{
        reset:(state)=>{
            return{
                ...state,
                isError:false,
                isLoading:false,
                isSuccess:false,
                message:" "
            }
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(registerUser.pending, (state,action)=>{
            state.isLoading=true
            state.isError=false
            state.isSuccess=false
        })

        .addCase(registerUser.fulfilled, (state, action)=>{
            state.isLoading=false
            state.isError=false
            state.isSuccess=true
            state.user=action.payload
        })

        .addCase(registerUser.rejected, (state,action)=>{
            state.isLoading=false
            state.isError=true
            state.isSuccess=false
            state.message=action.payload
        })

        .addCase(logoutUser.fulfilled,(state)=>{
            state.user=null
            state.isSuccess=true
        })

        .addCase(loginUser.pending, (state)=>{
            state.isLoading=true
            state.isError=false
            state.isSuccess=false
        })
        .addCase(loginUser.fulfilled, (state,action)=>{
            state.isLoading=false
            state.isError=false
            state.isSuccess=true
            state.user=action.payload
        })
        .addCase(loginUser.rejected, (state,action)=>{
            state.isLoading=false
            state.isError=true
            state.isSuccess=false
            state.message=action.payload
        })
    }
})

export const {reset}=authSlice.actions
export default  authSlice.reducer


export const registerUser = createAsyncThunk("REGISTER/USER", async(formData, thunkAPI)=>{
    try {
            const response = await axios.post("/api/auth/"+'register', formData)
             localStorage.setItem('user', JSON.stringify(response.data))
             return response.data
        }
        
    catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

export const logoutUser = createAsyncThunk("LOGOUT/USER", async()=>{
    localStorage.removeItem('user')
})

export const loginUser = createAsyncThunk("LOGIN/USER", async(formData2, thunkAPI)=>{
    try {
        const response = await axios.post("/api/auth/"+'login', formData2)
        localStorage.setItem('user', JSON.stringify(response.data))
        return response.data
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})