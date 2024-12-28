package com.github.Jkali8.deeper_task_backend.controller;

import com.github.Jkali8.deeper_task_backend.dto.IntersectionRequest;
import com.github.Jkali8.deeper_task_backend.service.GeometryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/geometry")
public class GeometryController {

    @Autowired
    private GeometryService geometryService;

    @PostMapping("/intersect")
    public String checkIntersection(@RequestBody IntersectionRequest intersectionRequest) throws InterruptedException {
        Thread.sleep(5000); //simulate a few requests
        boolean intersects = geometryService.checkIfInteresected(intersectionRequest.getSquare(), intersectionRequest.getLine());
        return intersects ? "The line intersects the square." : "The line does not intersect the square.";
    }
}