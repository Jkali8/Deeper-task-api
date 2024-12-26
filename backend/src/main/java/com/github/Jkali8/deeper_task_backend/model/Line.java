package com.github.Jkali8.deeper_task_backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Line {
    private double x1;
    private double y1;
    private double x2;
    private double y2;
}
