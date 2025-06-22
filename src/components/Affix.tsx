import * as React from 'react';
import _ from 'lodash';
// @ts-ignore
import Events from 'oui-dom-events';
// @ts-ignore
import DOMUtils from 'oui-dom-utils';
import classnames from 'classnames';
import './Affix.scss';

const { PureComponent } = React;

interface AffixProps {
  prefixCls?: string;
  className?: string;
  children: React.ReactNode;
  offsetTop?: number;
}

interface AffixState {
  affixStyle: React.CSSProperties | undefined;
  placeholderStyle: React.CSSProperties | undefined;
  id: string;
  isFixed: boolean;
}

/*
 * Affix component that allows an element to stick to the top of the viewport when scrolling.
 * I feel like this component could be replaced with a more modern solution like `position: sticky;`
 */
class Affix extends PureComponent<AffixProps, AffixState> {
  static defaultProps = {
    prefixCls: 'rechartsOrg-affix',
    offsetTop: 0,
  };

  static displayName = 'Affix';

  placeholderDom: HTMLDivElement | null = null;

  constructor(props: AffixProps) {
    super(props);
    this.state = {
      affixStyle: undefined,
      placeholderStyle: undefined,
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
    Events.on(window, `scroll.${prefixCls}.${id}`, this.updatePosition);
    Events.on(window, `resize.${prefixCls}.${id}`, this.updatePosition);
  }

  clearScrollEventListeners() {
    const { prefixCls } = this.props;
    const { id } = this.state;
    Events.off(window, `scroll.${prefixCls}.${id}`);
    Events.off(window, `resize.${prefixCls}.${id}`);
  }

  updatePosition = () => {
    const { offsetTop } = this.props;
    const scrollTop = DOMUtils.getDocumentScrollTop();
    // affix
    const affixNode = this.placeholderDom;

    if (!affixNode) {
      this.setState({
        affixStyle: undefined,
        placeholderStyle: undefined,
        isFixed: false,
      });
      return;
    }

    const { offsetWidth } = affixNode;
    const { offsetHeight } = affixNode;
    const { top, left } = DOMUtils.getOffset(affixNode);
    if (scrollTop > top) {
      // Fixed Top
      const affixStyle: React.CSSProperties = {
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
        affixStyle: undefined,
        placeholderStyle: undefined,
        isFixed: false,
      });
    }
  };

  render() {
    const { prefixCls, className, offsetTop, ...other } = this.props;
    const { isFixed } = this.state;
    const componentClasses = isFixed ? `${prefixCls}-active` : `${prefixCls}-inactive`;
    const classes = classnames(`${prefixCls}`, className, componentClasses);
    const { placeholderStyle, affixStyle } = this.state;

    return (
      <div
        {...other}
        style={placeholderStyle}
        ref={(node) => {
          this.placeholderDom = node;
        }}
      >
        <div className={classes} style={affixStyle}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Affix;
