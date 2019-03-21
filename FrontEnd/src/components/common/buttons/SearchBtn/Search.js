import React from "react";
import styles from "./Search.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Search = () => (
  <div className={cx("Search")}>
    <input type="text" value="java, math.."/>
  </div>
);

export default Search;