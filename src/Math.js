import React, {Component} from 'react';

class MathComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      showCount: true
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSubtract = this.handleSubtract.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleAdd () {
    this.setState({count: this.state.count + 1})
  }

  handleSubtract () {
    this.setState({count: this.state.count - 1})
  }

  handleToggle () {
    this.setState({showCount: !this.state.showCount})
  }

  render () {
    const {count, showCount} = this.state;

    return (
      <div>
        <h3>Math!!!</h3>
        <p onClick={this.handleAdd}>Add</p>
        <p onClick={this.handleSubtract}>Subtract</p>
        <p onClick={this.handleToggle}>Toggle</p>
        {showCount && <p>{count}</p>}
      </div>
    );
  }
};

export default MathComponent;
