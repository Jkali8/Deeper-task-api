package com.github.Jkali8.deeper_task_backend.dto;

import com.github.Jkali8.deeper_task_backend.model.Line;
import com.github.Jkali8.deeper_task_backend.model.Square;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class IntersectionRequest {

    private Square square;
    private Line line;
    private boolean testState;

}
