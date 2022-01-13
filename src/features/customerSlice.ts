import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CustState {
  value: Customer[]
}

interface Food {
  food: string,
  id:string
} 

interface Customer {
  id:string,
  name:string,
  food:string[]
}

const initialState:CustState = {
  value: []
}

export const customerSlice = createSlice({
  name:'customers',
  initialState,
  reducers:{
    addCustomer : (state,action:PayloadAction<Customer>) => {
      state.value.push(action.payload)
    },
    addFood : (state,action:PayloadAction<Food>) => {
      state.value.forEach(customer => {
        if (customer.id === action.payload.id) {
          customer.food.push(action.payload.food)          
        }
      })
    }
  }
})

export const {addCustomer,addFood} = customerSlice.actions

export default customerSlice.reducer