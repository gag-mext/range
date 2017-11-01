
//区域选择滑动条。当 `disabled` 为 `true` 时，滑块处于不可用状态。可以使用`createTooltip`来进行封装以产生 ToolTip 功能。


/* eslint arrow-body-style: 0*/



import React from 'react';
import ReactDOM from 'react-dom';
import Range from '../src';
import WingBlank  from '@gag/wing-blank';
import createTooltip  from '@gag/create-tooltip';
import WhiteSpace  from '@gag/white-space';
const RangeWithTooltip = createTooltip(Range);
const log = (name) => {
  return (value) => {
    console.log(`${name}: ${value}`);
  };
};
class App extends React.Component {
  render(){
      debugger
    return (
      <div className="am-slider-example">
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <p className="title">Range, 基础使用</p>
          <Range min={0} max={20} defaultValue={[3, 10]} onChange={log('change')} onAfterChange={log('afterChange')} />
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <p className="title">Range, 带 Tooltip</p>
          <RangeWithTooltip min={0} max={20} defaultValue={[3, 10]} onChange={log('change')} onAfterChange={log('afterChange')} />
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <p className="title">Range, 禁用</p>
          <Range min={0} max={20} defaultValue={[3, 10]} onChange={log('change')} onAfterChange={log('afterChange')} disabled />
        </WingBlank>
      </div>
    );



  }

};

ReactDOM.render(<App />, document.getElementById('sk-root'));
