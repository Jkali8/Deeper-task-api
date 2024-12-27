package com.github.Jkali8.deeper_task_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class DeeperTaskBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(DeeperTaskBackendApplication.class, args);
	}

}
