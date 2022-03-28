import { connect } from 'react-redux';
import './App.css';
import TodoItem from './components/TodoItem'
import TodoForm from './components/TodoForm';



const App = ({todoList})=> {
    return (
        <div className="App">
        <h1 className="brand-link">
            <span className="gt-symbol">&gt;</span>
            react-todo
        </h1>
        <div className="todo_app">
            <TodoForm/>
            <div className="todo-list">
                {
                    todoList.map(todo => <TodoItem 
                                            key={todo.id} 
                                            id={todo.id} 
                                            name={todo.name} 
                                            create={todo.create}
                                        /> 
                    )
                }
            </div>
        </div>
        </div>
    );
}


const mapStateToProps = (state)=> ({todoList:state.todo})

export default connect(mapStateToProps)(App);
