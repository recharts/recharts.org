import React, { Component, PropTypes } from 'react';

class Link extends Component {
  static propTypes = {
    activeCondition: PropTypes.bool,
    activeClassName: PropTypes.string,
    route: PropTypes.func,
  };

  static defaultProps = {
    activeClassName: 'active',
  };

  constructor(props) {
    super(props);
    this.handleNavRoute = this.handleNavRoute.bind(this);
  }

  handleNavRoute(e) {
    e.preventDefault();

    this.props.route();
  }

  render() {
    const { activeCondition, activeClassName, ...props } = this.props;

    if (activeCondition) {
      props.className += props.className === '' ? activeClassName : ` ${activeClassName}`;
    }

    return (
      <a {...props} href="#" onClick={this.handleNavRoute} />
    );
  }
}

export default Link;
