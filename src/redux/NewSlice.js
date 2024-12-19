import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk untuk fetch data berita
export const fetchNews = createAsyncThunk('news/fetchNews', async (category) => {
  const response = await axios.get(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${category}&api-key=CrNqkxIfzxTDmb5HFnsPoc4KyooLpkex`
  );
  return response.data.response.docs;
});

// Slice Redux untuk berita
const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchNews.rejected, (state) => {
        state.loading = false;
        state.error = 'Error fetching news';
      });
  },
});

export default newsSlice.reducer;
