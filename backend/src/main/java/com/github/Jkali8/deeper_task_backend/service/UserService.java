package com.github.Jkali8.deeper_task_backend.service;

import com.github.Jkali8.deeper_task_backend.model.User;
import com.github.Jkali8.deeper_task_backend.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public User createUser(String username, String plainPassword, String role) {
        if (userRepository.findByUsername(username).isPresent()) {
            throw new IllegalArgumentException("User with username '" + username + "' already exists");
        }

        User user = new User();
        user.setUsername(username);
        user.setPassword(passwordEncoder.encode(plainPassword));
        user.setRole(role);

        return userRepository.save(user);
    }
}
