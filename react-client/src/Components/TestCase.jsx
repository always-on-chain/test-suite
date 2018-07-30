import React from 'react';
import TestSteps from './TestSteps.jsx';

const TestCase = (props) => {
  let testCase = props.testCase
  return (
    <div className="test-case">
      <div className="test-case-name-status">
        <div className="test-case-name">Test Name: {testCase.test_name} </div>
        {testCase.status ? 
          <div className="test-case-status-passed">&nbsp;PASSED</div> : 
          <div className="test-case-status-failed">&nbsp;FAILED</div> 
        }
      </div>
      <TestSteps testSteps={testCase.test_steps} />
    </div>
  )
}

export default TestCase;