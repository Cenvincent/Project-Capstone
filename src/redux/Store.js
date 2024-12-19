import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './NewSlice'; // Menambahkan newsReducer untuk menangani berita
import savedReducer from './SavedSlice';

const store = configureStore({
  reducer: {
    savedNews: savedReducer,  // Menambahkan reducer untuk berita yang disimpan
    news: newsReducer,        // Menambahkan reducer untuk fetching berita
  },
});

export default store;
