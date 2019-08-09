import React from "react";
import "./searchbox-component.css";

export const SearchBox = props => (
  <input
    className="search"
    type="search"
    value={props.value}
    placeholder={props.placeholder}
    onChange={props.handleChange}
  />
);