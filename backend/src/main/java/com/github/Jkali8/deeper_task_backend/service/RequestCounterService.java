package com.github.Jkali8.deeper_task_backend.service;

import org.springframework.stereotype.Service;

import java.util.concurrent.atomic.AtomicInteger;

@Service
public class RequestCounterService {
    private final AtomicInteger requestCounter = new AtomicInteger(0);

    public void increment() {
        requestCounter.incrementAndGet();
    }

    public void decrement() {
        requestCounter.decrementAndGet();
    }

    public int getRequestCount() {
        return requestCounter.get();
    }
}
