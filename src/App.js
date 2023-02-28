import "./App.css";
import { getMovies } from "./fakeMovieService";
import React, { useState } from "react";

function App() {
  const [movies, setMovies] = useState(getMovies());

  const handleDeletion = (id) => {
    setMovies(movies.filter((movie) => movie._id != id));
  };

  return (
    <div>
      <main className="container m-5">
        <h1>Showing {movies.length} movies in the databse.</h1>

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
      </main>
    </div>
  );
}

export default App;
