import React from 'react';
import ReactDOM from 'react-dom';
import TestCases from './Components/TestCases.jsx';
import data from '../../resources/data.json';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: data
    }
  }

  render () {
    return (
      <TestCases test={this.state.test} />
    )
  }
}

ReactDOM.render(<Test />, document.getElementById('test'));