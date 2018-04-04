/**
 * @file 固钉
 */
import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import Events from 'oui-dom-events';
import DOMUtils from 'oui-dom-utils';
import classNames from 'classNames';
import './Affix.scss';

class Affix extends Component {
  static propTypes = {
    // default
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    //
    children: PropTypes.node.isRequired,
    offsetTop: PropTypes.number,
  };

  static defaultProps = {
    prefixCls: 'rechartsOrg-affix',
    offsetTop: 0,
  };

  static displayName = 'Affix';

  constructor(props) {
    super(props);
    this.state = {
      affixStyle: null,
      placeholderStyle: null,
      id: _.uniqueId(props.prefixCls),
      isFixed: false,
    };
  }

  componentDidMount() {
    this.setTargetEventListeners();
  }

  componentWillUnmount() {
    this.clearScrollEventListeners();
  }

  setTargetEventListeners() {
    const { prefixCls } = this.props;
    const { id } = this.state;
    Events.on(window, `scroll.${prefixCls}.${id}`, ::this.updatePosition);
    Events.on(window, `resize.${prefixCls}.${id}`, ::this.updatePosition);
  }

  clearScrollEventListeners() {
    const { prefixCls } = this.props;
    const { id } = this.state;
    Events.off(window, `scroll.${prefixCls}.${id}`);
    Events.off(window, `resize.${prefixCls}.${id}`);
  }

  updatePosition() {
    const { offsetTop } = this.props;
    const scrollTop = DOMUtils.getDocumentScrollTop();
    // affix
    const affixNode = ReactDOM.findDOMNode(this);
    const offsetWidth = affixNode.offsetWidth;
    const offsetHeight = affixNode.offsetHeight;
    const { top, left } = DOMUtils.getOffset(affixNode);
    if (scrollTop > top) {
      // Fixed Top
      const affixStyle = {
        position: 'fixed',
        top: offsetTop,
        left,
        width: offsetWidth,
      };
      const placeholderStyle = {
        width: offsetWidth,
        height: offsetHeight,
      };
      this.setState({
        affixStyle,
        placeholderStyle,
        isFixed: true,
      });
    } else {
      this.setState({
        affixStyle: null,
        placeholderStyle: null,
        isFixed: false,
      });
    }
  }

  render() {
    const { prefixCls, className, ...other } = this.props;
    const { isFixed } = this.state;
    const componentClasses = isFixed ? `${prefixCls}-active` : `${prefixCls}-inactive`;
    const classes = classNames(
      `${prefixCls}`,
      className,
      componentClasses,
    );
    const { placeholderStyle, affixStyle } = this.state;

    return (
      <div {...other} style={placeholderStyle}>
        <div className={classes} style={affixStyle}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Affix;
