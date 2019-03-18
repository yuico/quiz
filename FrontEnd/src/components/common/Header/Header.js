import React from "react";
import { NavLink } from 'react-router-dom';

import styles from "./Header.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Header = () => {
  const activeStyle = {
    color: 'black',
    fontSize: '1rem'
  };

  return (
    <header className={cx("header")}>
      <div className={cx("header-content")}>
        <div className={cx("brand")}>
          <ul>
            <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
            <li><NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink></li>
            <li><NavLink exact to="/quiz" activeStyle={activeStyle}>Quiz</NavLink></li>
            <li><NavLink to="/quiz/make" activeStyle={activeStyle}>MakeQuiz</NavLink></li>
            <li><input type="text" value="java, math.."/></li>
          </ul>    
        </div>
      </div>
    </header>
  );
};

export default Header;
