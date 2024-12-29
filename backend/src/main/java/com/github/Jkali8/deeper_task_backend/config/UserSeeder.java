package com.github.Jkali8.deeper_task_backend.config;

import com.github.Jkali8.deeper_task_backend.model.User;
import com.github.Jkali8.deeper_task_backend.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class UserSeeder {

    @Bean
    public CommandLineRunner seedUsers(UserRepository userRepository) {
        return args -> {
            if (userRepository.findByUsername("admin").isEmpty()) {
                User admin = new User();
                admin.setUsername("admin");
                admin.setPassword("admin123");
                userRepository.save(admin);
            }
        };
    }
}