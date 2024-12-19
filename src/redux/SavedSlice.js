import { createSlice } from '@reduxjs/toolkit';

// Initial state untuk saved news
const initialState = [];

// Slice Redux untuk menyimpan berita yang disukai
const savedSlice = createSlice({
  name: 'savedNews',
  initialState,
  reducers: {
    // Untuk menyetel artikel yang disimpan
    setSavedNews: (state, action) => {
      return action.payload;
    },
    // Menambahkan artikel ke dalam saved news
    addArticle: (state, action) => {
      const existingArticle = state.find((article) => article._id === action.payload._id);
      if (!existingArticle) {
        state.push(action.payload);
      }
    },
    // Menghapus artikel dari saved news
    removeArticle: (state, action) => {
      return state.filter((article) => article._id !== action.payload._id);
    },
  },
});

export const { setSavedNews, addArticle, removeArticle } = savedSlice.actions;
export default savedSlice.reducer;
