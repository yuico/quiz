import React from "react";
import { NavLink } from 'react-router-dom';
import Search from '../buttons/SearchBtn'

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
            <li class="logo"><NavLink exact to="/" activeStyle={activeStyle}>Logo</NavLink></li>
            <Search />
            <li class="about"><NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink></li>
            <li class="quiz"><NavLink exact to="/quiz" activeStyle={activeStyle}>Quiz</NavLink></li>
            <li class="make"><NavLink to="/quiz/make" activeStyle={activeStyle}>MakeQuiz</NavLink></li>        
          </ul>    
        </div>
      </div>
    </header>
  );
};

export default Header;
