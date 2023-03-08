import React, { Component } from "react";
import _ from "lodash";

class Pagination extends Component {
  state = {};

  render() {
    const { itemsCount, pageSize, onPageChange, currentPage } = this.props;

    console.log(currentPage);

    const pagesCount = Math.ceil(itemsCount / pageSize);

    const pages = _.range(1, pagesCount + 1);
    if (pages.length === 1) return null;

    return (
      <nav>
        <ul className="pagination">
          {pages.map((pageNumber) => {
            return (
              <li
                key={pageNumber}
                className={
                  pageNumber === currentPage ? "page-item active" : "page-item"
                }
              >
                <a
                  onClick={() => onPageChange(pageNumber)}
                  className="page-link"
                >
                  {pageNumber}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Pagination;