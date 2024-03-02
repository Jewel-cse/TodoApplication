package com.jewel.Todo.todo.controller;

import com.jewel.Todo.todo.model.Todo;
import com.jewel.Todo.todo.service.TodoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@RestController
public class TodoResource {
    private TodoService todoService ;

    public TodoResource(TodoService todoService){
        this.todoService = todoService;
    }
    @GetMapping("/users/{username}/todos")
    public List<Todo> retrieveTodos(@PathVariable String username){
        return todoService.findByUserName(username);
    }
    @GetMapping("users/{username}/todos/{id}")
    public  Todo retrieveTodo(@PathVariable String username,@PathVariable int id){
        return  todoService.findById(id);
    }

    @DeleteMapping("users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable int id){
        todoService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("users/{username}/todos/{id}")
    public Todo updateTodo(@PathVariable String username, @PathVariable int id,@RequestBody Todo todo){
        todoService.updateToDo(todo);
        return todo;
    }

    @PostMapping("/users/{username}/todos")
    public  Todo createTodo(@PathVariable String username,@RequestBody Todo todo){
        Todo createdTodo = todoService.addToDos(username,todo.getDescription(),todo.getTargetDate(),todo.isDone());
        return  createdTodo;
    }
}
