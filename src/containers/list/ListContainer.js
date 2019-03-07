import React, { Component } from 'react';
import QuestionBox from '../../components/common/QuestionBox';


class ListContainer extends Component {
 
  render() {
   
    return (
      <div>
          <QuestionBox />
          <QuestionBox />
          <QuestionBox />
          <QuestionBox />
      </div>
    );
  }
}

export default ListContainer;
