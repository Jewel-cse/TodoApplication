package com.jewel.Todo.todo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TodoResource {
    private  TodoService todoService ;

    public TodoResource(TodoService todoService){
        this.todoService = todoService;
    }
    @GetMapping("/users/{username}/todos")
    public List<Todo> retrieveTodos(@PathVariable String username){
        return todoService.findByUserName(username);
    }

}
