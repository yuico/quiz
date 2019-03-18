import React from "react";

import styles from "./Footer.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const Footer = () => (
  <footer className={cx("footer")}>
    <ul>
      <li><Link to="/" className={cx("brand")}>Sheridancollege</Link></li>
      <li><Link to="/" className={cx("brand")}>SSU</Link></li>
    </ul>
  </footer>
);

export default Footer;
