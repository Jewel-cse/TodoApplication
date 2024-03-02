package com.jewel.Todo.todo.controller;


import com.jewel.Todo.todo.model.Todo;
import com.jewel.Todo.todo.repository.TodoJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TodoJpaResource {

    @Autowired
    private TodoJpaRepository todoRepository;

    @GetMapping("/users/{username}/todos")
    public List<Todo> retrieveTodos(@PathVariable String username){
        //return todoService.findByUserName(username);
        return todoRepository.findByUsername(username);
    }
    @GetMapping("users/{username}/todos/{id}")
    public  Todo retrieveTodo(@PathVariable String username,@PathVariable int id){
        //return  todoService.findById(id);
        return todoRepository.findById(id).get();
    }

    @DeleteMapping("users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable int id){
        todoRepository.deleteById(id);
        //todoService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("users/{username}/todos/{id}")
    public Todo updateTodo(@PathVariable String username, @PathVariable int id,@RequestBody Todo todo){
        todo.setUsername(username);
        todoRepository.save(todo);
        //todoService.updateToDo(todo);
        return todo;
    }

    @PostMapping("/users/{username}/todos")
    public  Todo createTodo(@PathVariable String username,@RequestBody Todo todo){
        todo.setUsername(username);
        todo.setId(null);
        return  todoRepository.save(todo);
    }
}
