import React from "react";
import PropTypes from "prop-types";

const getClasses = (genreName, currentGenre) => {
  const rootClassName = "list-group-item";
  return genreName === currentGenre
    ? rootClassName + "  active"
    : rootClassName;
};

const ListGroup = (props) => {
  const { items, textProperty, valueProperty, onItemSelect, currentGenre } =
    props;

  return (
    <ul className="list-group">
      {items.map((g) => {
        return (
          <li
            style={{ cursor: "pointer" }}
            key={g[valueProperty]}
            onClick={() => onItemSelect(g)}
            className={getClasses(g[textProperty], currentGenre)}
          >
            {g[textProperty]}
          </li>
        );
      })}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

ListGroup.propTypes = {
  items: PropTypes.array.isRequired,
  currentGenre: PropTypes.string,
};

export default ListGroup;
