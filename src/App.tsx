import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import TodosContextProvider from './context/TodosContext';

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
