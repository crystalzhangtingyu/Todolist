import React, { Component } from 'react';

class Filter extends Component {
  changeShowing = (e) => {
    const { nowShowing } = e.target.dataset;

    this.props.changeShowing(nowShowing);
  }

  render() {
    const { nowShowing } = this.props;

    return (
      <ul className="todo-filter">
        <li
          className={nowShowing === 'all' ? 'current' : ''}
          onClick={this.changeShowing}
          data-now-showing="all"
        >
          all
        </li>
        <li
          className={nowShowing === 'active' ? 'current' : ''}
          onClick={this.changeShowing}
          data-now-showing="active"
        >
          active
        </li>
        <li
          className={nowShowing === 'completed' ? 'current' : ''}
          onClick={this.changeShowing}
          data-now-showing="completed"
        >
          completed
        </li>
      </ul>
    );
  }
}

export default Filter;