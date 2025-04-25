import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apptSlice = createSlice({
    name:"appt",
    initialState:{
        alltodo:[{id:1, title:"tesrt",description:"asdfdgfrgde"}],
        edit:{todo:{}, isedit:false},
        isLoading:false,
        isError:false,
        isSuccess:false
    },
    reducer:{
        deleteTodostate:(state,action)=>{
            return{
                ...state,
                alltodo:state.alltodo.filter((todo)=>todo.id!==action.payload)
            }
        },

        editTodostate:(state,action)=>{
            return{
                ...state,
                edit:{todo:action.payload, isedit:true}
            }
        },
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getallTodo.pending,(state,action)=>{
            state.isLoading=true
            state.isError=false
            state.isSuccess=false
        })

        .addCase(getallTodo.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.alltodo=action.payload
            state.isError=false
        })

        .addCase(getallTodo.rejected, (state)=>{
            state.isLoading=false
            state.isSuccess=false
            state.isError=true
        })


        .addCase(addingTodo.pending,(state,action)=>{
            state.isLoading=true
            state.isError=false
            state.isSuccess=false
        })

        .addCase(addingTodo.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.alltodo=[action.payload, ...state.alltodo]
            state.isError=false
        })

        .addCase(addingTodo.rejected, (state)=>{
            state.isLoading=false
            state.isSuccess=false
            state.isError=true
        })

        .addCase(deleteTodo.pending,(state,action)=>{
            state.isLoading=true
            state.isError=false
            state.isSuccess=false
        })

        .addCase(deleteTodo.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.isError=false
        })

        .addCase(deleteTodo.rejected, (state)=>{
            state.isLoading=false
            state.isSuccess=false
            state.isError=true
        })

        .addCase(updateTodo.pending,(state,action)=>{
            state.isLoading=true
            state.isError=false
            state.isSuccess=false
        })

        .addCase(updateTodo.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.alltodo=state.alltodo.map((todo)=>todo.id===action.payload.id ? action.payload : todo)
            state.edit={todo:{},isedit:false}
            state.isError=false
        })

        .addCase(updateTodo.rejected, (state)=>{
            state.isLoading=false
            state.isSuccess=false
            state.isError=true
        })

        
    }
})
export const { deleteTodostate, editTodostate, alltodo, edit}=apptSlice.actions
export default apptSlice.reducer


export const getallTodo=createAsyncThunk("FETCH/TODO", async()=>{
    const response = await axios.get("/api/appointment/"+'allapt')
    return response.data
})

export const addingTodo=createAsyncThunk("ADD/TODO",async(todo)=>{
    const response=await axios.post("/api/appointment",todo)
    return response.data
})


export const deleteTodo=createAsyncThunk("DELETE/TODO",async(id)=>{
    const response = await axios.delete("/api/appointment/"+id)
    return response.data
})

export const updateTodo=createAsyncThunk("UPDATE/TODO",async(todo)=>{
    const response = await axios.put("/api/appointment/"+todo._id,{title:todo.title, description:todo.description})
    return response.data
})


