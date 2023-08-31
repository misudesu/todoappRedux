

import AddTodo from './Component/AddTodo';
import Todo from './Component/Todo';

function App() {
  return (
    <div className='flex flex-col justify-center items-center w-full' >
      <div>

    <AddTodo/>
    <Todo/>
      </div>
  
    </div>
  );
}

export default App;
