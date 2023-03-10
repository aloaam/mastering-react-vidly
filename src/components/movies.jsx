import React, { useState } from "react";
import { getMovies } from "./../fakeMovieService";
import { getGenres } from "../fakeGenreService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import paginate from "../utils/pagintate";
import ListGroup from "./common/listGroup";
import MoviesTable from "./moviesTables";

function Movies() {
  const MOVIES_PER_PAGE = 4;
  const START_PAGE = 1;
  const All_GENRES = "All Genres";
  const [movies, setMovies] = useState(getMovies());
  const [pageSize] = useState(MOVIES_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(START_PAGE);
  const [genres, setGenres] = useState([ {name: All_GENRES} , ...getGenres()]);
  const [currentGenre, setCurrentGenre] = useState(All_GENRES);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleGenreSelect = (item) => {
    setCurrentGenre(item.name);
    setCurrentPage(START_PAGE)
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

  const filtered = currentGenre != All_GENRES
    ? movies.filter((m) => m.genre.name === currentGenre)
    : movies;

  const moviesToRender = paginate(filtered, currentPage, pageSize);

  if (filtered.length === 0)
    return <h1>There are no movies in the database!</h1>;

  return (
    <div className="row">
      <div className="col-3">
        <ListGroup
          items={genres}
          currentGenre={currentGenre}
          onItemSelect={handleGenreSelect}
        />
      </div>
      <div className="col">
        <MoviesTable 
          filtered={filtered}
          moviesToRender={moviesToRender}
          handleLike={handleLike}
          handleDeletion={handleDeletion}
        />
        <Pagination
          onPageChange={handlePageChange}
          currentPage={currentPage}
          itemsCount={filtered.length}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
}

export default Movies;
