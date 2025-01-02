package com.github.Jkali8.deeper_task_backend.controller;

import com.github.Jkali8.deeper_task_backend.service.RequestCounterService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
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

    @Operation(summary = "Check how many requests are being processed")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Request count",
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(example = "Currently processing 5 requests."))),
            @ApiResponse(responseCode = "401", description = "Unauthorized access")
    })
    @GetMapping("/api/admin/requests")
    public ResponseEntity<String> getRequestCount() {
        int count = requestCounterService.getRequestCount();
        return ResponseEntity.ok("Currently processing " + count + " requests.");
    }
}
