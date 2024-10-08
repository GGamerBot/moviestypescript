
class Movie {
    title: string;
    duration: number;
    genres: string[];
  
    constructor(title: string, duration: number, genres: string[]) {
        this.title = title;
        this.duration = duration;
        this.genres = genres;
    }
  }
  
  const movies: Movie[] = [
    new Movie("Inception", 148, ["Sci-Fi", "Thriller"]),
    new Movie("The Godfather", 175, ["Crime", "Drama"]),
    new Movie("The Dark Knight", 152, ["Action", "Drama"])
  ];
  
  function displayMovies(movies: Movie[]) {
    const tableBody = document.getElementById('movie-table-body');
    if (tableBody) {
        tableBody.innerHTML = '';
  
        movies.forEach(movie => {
            const row = document.createElement('tr');
            const titleCell = document.createElement('td');
            const durationCell = document.createElement('td');
            const genresCell = document.createElement('td');
  
            titleCell.textContent = movie.title;
            durationCell.textContent = `${movie.duration} perc`;
            genresCell.textContent = movie.genres.join(', ');
  
            row.appendChild(titleCell);
            row.appendChild(durationCell);
            row.appendChild(genresCell);
            tableBody.appendChild(row);
        });
    }
  }
  
  window.onload = () => {
    displayMovies(movies);
  };
  