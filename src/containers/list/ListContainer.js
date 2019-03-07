import React, { Component } from 'react';
import QuestionBox from '../../components/common/QuestionBox';
import styles from './ListContainer.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class ListContainer extends Component {
 
  render() {
   
    return (
      <div className={cx('ListContainer')}>
          <QuestionBox  />
          <QuestionBox  />
          <QuestionBox  />
          <QuestionBox  />
      </div>
    );
  }
}

export default ListContainer;
