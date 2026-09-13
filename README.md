# Movie Search App
A simple React application that lets users search for movies using the TMDB (The Movie Database) API. The app displays popular movies by default and updates results dynamically as the user types, using a debounced search system to reduce unnecessary API calls.

# Features
Movie Search:
- Search for movies by title using TMDB’s /search/movie endpoint.
- Automatically fetches popular movies when no search term is provided.

Debounced Input
- Uses a custom useDebounce hook to delay API requests until the user stops typing.
- Reduces API load and prevents excessive network calls.

Movie Display 
- Renders movie results using a reusable <MovieCard /> component.
- Displays posters, titles, and other movie details (depending on the card implementation).

API Integration
- Uses TMDB’s REST API with a Bearer token stored in environment variables.
- Handles errors with user‑friendly messages.

Loading States
- Shows a spinner while fetching data.
- Displays error messages when requests fail.

Layout and CSS
- Tailwind-based styling for movie grids and clean UI.

# Tech Stack
- React
- Vite
- Tailwind CSS
- TMDB API
- Custom Hooks
- Reusable Components
