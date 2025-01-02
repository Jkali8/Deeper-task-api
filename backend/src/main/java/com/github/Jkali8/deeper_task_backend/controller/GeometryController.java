package com.github.Jkali8.deeper_task_backend.controller;

import com.github.Jkali8.deeper_task_backend.dto.IntersectionRequest;
import com.github.Jkali8.deeper_task_backend.service.GeometryService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/geometry")
public class GeometryController {

    @Autowired
    private GeometryService geometryService;

    @Operation(summary = "Check if a line intersects with a square")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Intersection result",
                    content = @Content(schema = @Schema(example = "Objects intersect at: (x, y)"))),
    })
    @PostMapping("/intersect")
    public ResponseEntity<List<double[]>> checkIntersection(@RequestBody IntersectionRequest request) throws InterruptedException {
        if(request.isTestState()) {
            Thread.sleep(5000);
        }
        List<double[]> intersections = geometryService.getIntersectionPoints(request.getSquare(), request.getLine());
        return ResponseEntity.ok(intersections);
    }
}