package com.github.Jkali8.deeper_task_backend.service;

import com.github.Jkali8.deeper_task_backend.model.Line;
import com.github.Jkali8.deeper_task_backend.model.Square;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class GeometryService {

    public List<double[]> getIntersectionPoints(Square square, Line line) {
        List<double[]> intersections = new ArrayList<>();

        double halfSize = square.getSideLength() / 2.0;
        double left = square.getX() - halfSize;
        double right = square.getX() + halfSize;
        double top = square.getY() + halfSize;
        double bottom = square.getY() - halfSize;

        Line[] edges = {
                new Line(left, top, right, top),
                new Line(right, top, right, bottom),
                new Line(right, bottom, left, bottom),
                new Line(left, bottom, left, top)
        };

        for (Line edge : edges) {
            double[] intersection = getLineIntersection(line, edge);
            if (intersection != null) {
                boolean exists = intersections.stream()
                        .anyMatch(point -> point[0] == intersection[0] && point[1] == intersection[1]);
                if (!exists) {
                    intersections.add(intersection);
                }
            }
        }

        return intersections;
    }

    private double[] getLineIntersection(Line line1, Line line2) {
        double x1 = line1.getX1(), y1 = line1.getY1(), x2 = line1.getX2(), y2 = line1.getY2();
        double x3 = line2.getX1(), y3 = line2.getY1(), x4 = line2.getX2(), y4 = line2.getY2();

        double denom = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
        if (denom == 0) {
            return null;
        }

        double px = ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) / denom;
        double py = ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) / denom;

        if (isBetween(px, py, x1, y1, x2, y2) && isBetween(px, py, x3, y3, x4, y4)) {
            return new double[]{px, py};
        }

        return null;
    }

    private boolean isBetween(double px, double py, double x1, double y1, double x2, double y2) {
        return px >= Math.min(x1, x2) && px <= Math.max(x1, x2)
                && py >= Math.min(y1, y2) && py <= Math.max(y1, y2);
    }
}
