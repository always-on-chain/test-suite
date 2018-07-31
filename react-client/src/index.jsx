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
      <div>
        <div id="intro">
          <h1 id="header">Tests for {this.state.test.app_name}</h1>
          <p>Time ran: {this.state.test.time_stamp}</p>
        </div>
        <TestCases test={this.state.test} />
      </div>
    )
  }
}

ReactDOM.render(<Test />, document.getElementById('test'));