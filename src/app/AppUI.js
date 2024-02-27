import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { TodoButton } from "../components/TodoButton/TodoButton";
import { TodosError } from "../components/TodosError/TodosError";
import { TodosLoading } from "../components/TodosLoading/TodosLoading";
import { EmptyTodos } from "../components/EmptyTodos/EmptyTodos";
import { TodoContext } from "../components/TodoContext/TodoContext";
import { TodoForm } from '../components/TodoForm/TodoForm';
import { Modal } from '../modal/modal';
import React from 'react';
function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  
  } = React.useContext(TodoContext)
  return (
    <>
      <TodoCounter />
      <TodoSearch />
    
          <TodoList>
            {loading && (
              <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
              </>
            )}
            {error && <TodosError />}
            {!loading && searchedTodos.length === 0 && <EmptyTodos />}
            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
  

      <TodoButton setOpenModal={setOpenModal}/>
      {openModal && (
        <Modal>
         <TodoForm/>
        </Modal>
      )}
    </>
  );
}
export { AppUI };
