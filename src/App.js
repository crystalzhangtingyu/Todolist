import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Input from'./Input';
import List from'./List';
import Filter from'./Filter';

class App extends Component {

  constructor(props){
      super(props);

      //初始化 todo app 的状态
      const todos = JSON.parse(localStorage.getItem("todos"));
      this.state = {
          todos: todos || [],
          nowShowing:"all",
      };
  }

  handleAddTodo = (todo)  => {
    console.log(todo);
    const { todos } = this.state;
    //将用户输入的 todo 都放到数组里
    todos.push(todo);
    localStorage.setItem("todos" , JSON.stringify(todos));
    
    //更新状态
    this.setState({ todos: todos });
  }

  handleUpdateTodo = (todo) =>{
    const { todos } = this.state;

    const _todos = todos.map((_todo) => {
       // 找到 todos 中相同 title 的todo
      if (todo.title === _todo.title) {
        // 用最新的  todo 替换，直接返回        
        return todo;
      }

      return _todo;
    });

    this.setState({ todos: _todos });
  }
  handleChangeShowing = (nowShowing)=>{
    this.setState({nowShowing:nowShowing});
  }
  handleDeleteTodo = (todoToBeDelete) => {
    const {todos} = this.state;

    const _todos = todos.filter((todo) => {
      return todoToBeDelete.title !== todo.title;
      });

    this.setState({ todos: _todos});
    localStorage.setItem("todos" , JSON.stringify(_todos));
  }
  render() {
    //取出全部的 todos 传给list
    const { todos , nowShowing } = this.state;  
    

    return (
      <div className="todo-wrapper">
        <h1>Crystal 的待办</h1>
      <Input 
        addTodo={this.handleAddTodo}
        
      />
      <Filter
      todos={todos}
      nowShowing={nowShowing}
      changeShowing={this.handleChangeShowing}
      />
      <List 
        nowShowing={nowShowing}
        todos={todos}
        updateTodo={this.handleUpdateTodo}
        deleteTodo={this.handleDeleteTodo}
          
      />
      </div>
    );
  }
}

export default App;
