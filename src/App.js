import { useSelector } from 'react-redux';
import './App.css';
import TodoItem from './components/TodoItem'
import TodoForm from './components/TodoForm';



const App = ()=> {

    const todos = useSelector(state => state.todo)

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
                    todos.map(todo => <TodoItem 
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



export default App;
