import "./App.css";
import { getMovies } from "./fakeMovieService";
import React, { useState } from "react";

function App() {
  const [movies, setMovies] = useState(getMovies());

  const handleDeletion = (id) => {
    setMovies(movies.filter((movie) => movie._id != id));
  };

  const renderTable = () => {
    if (movies.length === 0)
      return <h1>There are no movies in the database!</h1>;

    return (
      <div>
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
            {movies.map((m, ix) => {
              return (
                <tr key={ix}>
                  <th scope="row">{m.title}</th>
                  <td>{m.genre["name"]}</td>
                  <td>{m.numberInStock}</td>
                  <td>{m.dailyRentalRate}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDeletion(m._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div>
      <main className="container m-5">{renderTable()}</main>
    </div>
  );
}

export default App;
