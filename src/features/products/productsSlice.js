import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

import { BASE_URL } from "../../utils/constants";

export const getProducts = createAsyncThunk('products/getProducts', async(thunkAPI) => {
    try {
        const res =  await axios(`${BASE_URL}/products`);
        return res.data;
    }
    catch(err) {
        console.log(err);
        return thunkAPI.rejectWithValue(err);
    }
});

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        list: [],
        // filtered: [],
        // related: [],
        isLoading: false,
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getProducts.fulfilled, (state, { payload }) => {
            state.list = payload;
            state.isLoading = false;
        });
        builder.addCase(getProducts.rejected, (state) => {
            state.isLoading = false;
        });
    },
});

export default productsSlice.reducer;