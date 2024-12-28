package com.github.Jkali8.deeper_task_backend.config;

import com.github.Jkali8.deeper_task_backend.service.RequestCounterService;
import jakarta.servlet.*;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class RequestCounterFilter implements Filter {

    private final RequestCounterService requestCounterService;

    public RequestCounterFilter(RequestCounterService requestCounterService) {
        this.requestCounterService = requestCounterService;
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        requestCounterService.increment();
        try {
            chain.doFilter(request, response);
        } finally {
            requestCounterService.decrement();
        }
    }
}
