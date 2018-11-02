import React, { Component } from 'react';

class Input extends Component {

  constructor(props) {
    super(props);

    // 初始化组件的 state
    this.state = {
      value: 'hello qingcloud!',
    };
  }

  // handle input 的输入事件
  handleInputChange = (e) => {
    // 获取用户输入的值
    const { value } = e.target;

    // 使用用户输入的值改变组件的 state
    this.setState({
      value: value,
    });
  }
  //处理键盘的 enter  key 按下事件
  handleEnterDown = (event) => {
     if (event.key === "Enter"){
       // 取得用户输入的值
      const { value } = this.state;
      
       // 把 todo 传给父组件
            this.props.addTodo({
            title: value ,
            isFinished: false,
        });
       //清空 input
       this.setState({
          value:"",
       });
     }
  }
  render() {
    const { value } = this.state;

    return (
      <input
        className="todo-input"
        type="text"
        placeholder="今天的计划..."
        value={value}
        onChange={this.handleInputChange}
        onKeyDown={this.handleEnterDown}  />
    );
  }
}

export default Input;