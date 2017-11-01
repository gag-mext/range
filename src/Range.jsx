import '../style';
import React from 'react';
import RcRange from 'rc-slider/lib/Range';

class Range extends React.Component{


  render() {
    return (
      <div className={`${this.props.prefixCls}-wrapper`}><RcRange {...this.props} /></div>
    );
  }
}
Range.defaultProps = {
    prefixCls: 'am-slider',
};
Range.propTypes = {

  onChange:React.PropTypes.func,
  onAfterChange:React.PropTypes.func,
  defaultValue:React.PropTypes.arrayOf(React.PropTypes.number),
  tipFormatter:React.PropTypes.func,
  value:React.PropTypes.number,
  min:React.PropTypes.number,
  max:React.PropTypes.number,
  step:React.PropTypes.number,
  disabled: React.PropTypes.bool,
  /* web only */
  prefixCls: React.PropTypes.string
};
Range.displayName = "Range";
module.exports=Range;
