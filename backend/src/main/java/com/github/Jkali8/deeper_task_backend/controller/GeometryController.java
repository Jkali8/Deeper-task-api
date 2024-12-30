package com.github.Jkali8.deeper_task_backend.controller;

import com.github.Jkali8.deeper_task_backend.dto.IntersectionRequest;
import com.github.Jkali8.deeper_task_backend.service.GeometryService;
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

    @PostMapping("/intersect")
    public ResponseEntity<List<double[]>> checkIntersection(@RequestBody IntersectionRequest request) throws InterruptedException {
        if(request.isTestState()) {
            Thread.sleep(5000);
        }
        List<double[]> intersections = geometryService.getIntersectionPoints(request.getSquare(), request.getLine());
        return ResponseEntity.ok(intersections);
    }
}