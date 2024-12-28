package com.github.Jkali8.deeper_task_backend.controller;

import com.github.Jkali8.deeper_task_backend.service.RequestCounterService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    private final RequestCounterService requestCounterService;

    public AdminController(RequestCounterService requestCounterService) {
        this.requestCounterService = requestCounterService;
    }

    @GetMapping("/requests")
    public ResponseEntity<String> getRequestCount() {
        int count = requestCounterService.getRequestCount();
        return ResponseEntity.ok("Currently processing " + count + " requests.");
    }
}
