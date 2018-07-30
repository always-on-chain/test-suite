import React from 'react';
import ReactDOM from 'react-dom';
import data from '../../resources/data.json';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: data
    }
  }

  render () {
    console.log('data', data)
    return (
      <p>HI</p>
    )
  }
}

ReactDOM.render(<Test />, document.getElementById('test'));