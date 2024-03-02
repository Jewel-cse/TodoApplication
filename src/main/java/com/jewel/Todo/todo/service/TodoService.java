package com.jewel.Todo.todo.service;

import com.jewel.Todo.todo.model.Todo;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

@Service
public class TodoService {
        private static List<Todo> todos = new ArrayList<Todo>();
        private  static  int todoCount = 0;
        static {
            todos.add(new Todo(++todoCount,"jewel","learn AWS",
                    LocalDate.now().plusYears(1),false));
            todos.add(new Todo(++todoCount,"jewel","learn Spring",
                    LocalDate.now().plusYears(3),false));
            todos.add(new Todo(++todoCount,"jewel","learn Security",
                    LocalDate.now().plusYears(2),true));

        }

        public List<Todo> findByUserName(String userName){
            return todos;
        }

        public Todo addToDos(String name,String description,LocalDate targetDate,boolean done){
            Todo createdTodo = new Todo(++todoCount,name,description,targetDate,done);
            todos.add(createdTodo);
            return createdTodo;
        }
        public void deleteById(int id){
            Predicate<? super Todo> predicate = Todo -> Todo.getId() == id;
            todos.removeIf(predicate);
        }

        public Todo findById(int id) {
            Predicate<? super Todo> predicate = Todo -> Todo.getId() == id;
            Todo todo = todos.stream().filter(predicate).findFirst().get();

            return todo;
        }

        public void updateToDo(Todo todo) {
            //delete by id
            //add new todo
            deleteById(todo.getId());
            addToDos(todo.getUsername(),todo.getDescription(),todo.getTargetDate(),todo.isDone());
        }
    
}
