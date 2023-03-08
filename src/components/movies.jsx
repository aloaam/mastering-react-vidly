import React, { useState } from "react";
import { getMovies } from "./../fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import paginate from "../utils/paginate";

function Movies() {
  const MOVIES_PER_PAGE = 4;
  const START_PAGE = 1;
  const [movies, setMovies] = useState(getMovies());
  const [pageSize] = useState(MOVIES_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(START_PAGE);

  const handlePageChange = (pageNumber) => {
    console.log(pageNumber);
    setCurrentPage(pageNumber);
  };

  const handleLike = (movie) => {
    const index = movies.indexOf(movie);
    const newMovies = [...movies];
    newMovies[index].liked = !newMovies[index].liked;
    setMovies(newMovies);
  };

  const handleDeletion = (id) => {
    setMovies(movies.filter((movie) => movie._id !== id));
  };

  if (movies.length === 0) return <h1>There are no movies in the database!</h1>;

  return (
    <React.Fragment>
      <h1>There are {movies.length} movies in the database.</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {paginate(movies, currentPage, pageSize).map((movie, ix) => {
            return (
              <tr key={ix}>
                <th scope="row">{movie.title}</th>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like liked={movie.liked} onClick={() => handleLike(movie)} />
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDeletion(movie._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        onPageChange={handlePageChange}
        currentPage={currentPage}
        itemsCount={movies.length}
        pageSize={pageSize}
      />
    </React.Fragment>
  );
}

export default Movies;
