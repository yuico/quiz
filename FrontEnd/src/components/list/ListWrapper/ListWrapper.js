import React, { Component } from "react";
import ListContainer from '../../../containers/list/ListContainer';
import styles from "./ListWrapper.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class ListWrapper extends Component {
 
  render() {
   
    return (
      <div className={cx('list-wrapper')}>
          <ListContainer />
          <ListContainer />
      </div>
    );
  }
}

export default ListWrapper;
