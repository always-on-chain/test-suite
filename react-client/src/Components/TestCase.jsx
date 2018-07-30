import React from 'react';

const TestCase = (props) => {
  let testCase = props.testCase
  return (
    <div>
      {testCase.test_name} 
      {testCase.status ? 'TEST PASSED' : 'TEST FAILED'}
    </div>
  )
}

export default TestCase;