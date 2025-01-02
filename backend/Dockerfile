FROM maven:3.8.7-openjdk-17 AS build
WORKDIR /backend
COPY pom.xml .
COPY src ./src
RUN mvn clean package

FROM openjdk:17-jdk-slim
WORKDIR /backend
COPY target/*.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]