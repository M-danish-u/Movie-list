import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name: 'movies',
    initialState: {
      Movies: [],
      selectedMovie: null, // Change selectedMovie to null
    },
    reducers: {
      setMovies: (state, action) => {
        if (state.selectedMovie) {
          // If selectedMovie exists, update it
          state.Movies = state.Movies.map(movie =>
            movie.id === state.selectedMovie.id ? action.payload : movie
          );
          state.selectedMovie = null; // Clear selectedMovie after update
        } else {
          // If no selectedMovie, add a new movie
          state.Movies.push(action.payload);
        }
      },
      deleteMovie: (state, action) => {
        const movieId = action.payload;
        state.Movies = state.Movies.filter(movie => movie.id !== movieId);
      },
      editMovie: (state, action) => {
        state.selectedMovie = action.payload;
      },
    },
  });
  



export const {setMovies,deleteMovie,editMovie}=MovieSlice.actions
export default MovieSlice.reducer;
