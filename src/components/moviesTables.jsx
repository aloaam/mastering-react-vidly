import React from 'react';
import Like from './common/like';

class MoviesTable extends React.Component {
    

    render() { 

        const { filtered, moviesToRender, onLike, handleDeletion, onSort } = this.props

        return (
            <div>
                <h1>There are {filtered.length} movies in the database.</h1>
        <table className="table">
          <thead>
            <tr>
              <th onClick={() => onSort('title')} scope="col">Title</th>
              <th onClick={() => onSort('genre.name')} scope="col">Genre</th>
              <th onClick={() => onSort('numberInStock')} scope="col">Stock</th>
              <th onClick={() => onSort('dailyRentalRate')} scope="col">Rate</th>
            </tr>
          </thead>
          <tbody>
            {moviesToRender.map((movie, ix) => {
              return (
                <tr key={ix}>
                  <th scope="row">{movie.title}</th>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      liked={movie.liked}
                      onClick={() => onLike(movie)}
                    />
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
            </div>
        );
    }
}
 
export default MoviesTable;