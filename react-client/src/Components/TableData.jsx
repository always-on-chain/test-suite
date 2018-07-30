import React from 'react';
import Table from 'react-bootstrap/lib/Table';

const TableData = (props) => {
  let steps = props.steps; 
  return (
    <Table>
      <thead>
        <tr>
          <th>Launch Times</th>
          <th>Memory</th>
          <th>CPU</th>
        </tr>
      </thead>
      <tbody>
        {steps.launch_times.map((time, i) => {
          return (
            <tr>
              <td>{steps.launch_times[i]}</td>
              <td>{steps.memory[i]}</td>
              <td>{steps.cpu[i]}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default TableData;