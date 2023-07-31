import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  cryptoArr: [],
  isLoading: false,
  isError: false,
  searchQuery: '',
};

const url = 'https://api.coincap.io/v2/assets';
export const fetchCrypto = createAsyncThunk('cryptoArr/fetchCrypto', async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw new Error('Something went wrong');
  }
});

const cryptoSlice = createSlice({
  name: 'cryptoList',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCrypto.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCrypto.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cryptoArr = action.payload;
    });
    builder.addCase(fetchCrypto.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },

});

export const { setSearchQuery } = cryptoSlice.actions;
export default cryptoSlice.reducer;
