import React from 'react';
import TestCase from './TestCase.jsx';

const TestCases = (props) => {
  let testCases = props.test.test_cases;
    
  return (
    testCases.map((testCase) => {
      return <TestCase testCase={testCase} />
    })
  )
}

export default TestCases;