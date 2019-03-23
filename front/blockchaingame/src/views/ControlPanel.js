import React, { Component } from 'react';
import Counter from './Counter.js';
import Summary from './Summary.js';
import { DatePicker} from 'antd';

const style = {
  margin: '20px'
};

class ControlPanel extends Component {
  render() {
    return (
      <div style={style}>
        <Counter caption="First" />
        <Counter caption="Second" />
        <Counter caption="Third" />
        <hr/>
        <Summary />
          <DatePicker/>
      </div>
    );
  }
}

export default ControlPanel;

