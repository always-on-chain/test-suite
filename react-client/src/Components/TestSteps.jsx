import React from 'react';
import TableData from './TableData.jsx';

const TestSteps = (props) => {
  let testSteps = props.testSteps;

  return (
    testSteps.map((steps) => {
      return (
        <div className="steps">
          <div className="step-name">{steps.step_name}</div>
          <img className="screenshots" src={'../../resources/' + steps.screenshot} />
          <TableData steps={steps} />
        </div>
      )
    })
  )
}

export default TestSteps;