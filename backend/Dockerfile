FROM maven:3.9.4-eclipse-temurin-17 AS build
WORKDIR /backend
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

FROM openjdk:17-jdk-slim
COPY --from=build /backend/target/*.jar deeper-task-backend-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java", "-jar", "/deeper-task-backend-0.0.1-SNAPSHOT.jar"]