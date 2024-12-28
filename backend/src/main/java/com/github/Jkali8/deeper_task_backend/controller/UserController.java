package com.github.Jkali8.deeper_task_backend.controller;

import com.github.Jkali8.deeper_task_backend.model.User;
import com.github.Jkali8.deeper_task_backend.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<User> createUser(@RequestParam String username,
                                           @RequestParam String password,
                                           @RequestParam String role) {
        User user = userService.createUser(username, password, role);
        return ResponseEntity.ok(user);
    }
}
