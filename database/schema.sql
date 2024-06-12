CREATE DATABASE IF NOT EXISTS spaceship_travel_system;
USE spaceship_travel_system;

CREATE TABLE Spaceships (
    SpaceshipID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL UNIQUE,  
    Capacity INT NOT NULL CHECK (Capacity > 0),
    LaunchDate DATE DEFAULT NULL,  
    Status VARCHAR(50) NOT NULL
);

CREATE TABLE CrewMembers (
    CrewMemberID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,  
    Role VARCHAR(100) NOT NULL,
    ExperienceLevel INT NOT NULL,
    AssignedSpaceshipID INT,
    FOREIGN KEY (AssignedSpaceshipID) REFERENCES Spaceships(SpaceshipID)
);

CREATE TABLE Missions (
    MissionID INT AUTO_INCREMENT PRIMARY KEY,
    SpaceshipID INT NOT NULL,
    Destination VARCHAR(100) NOT NULL,  
    LaunchDate DATE DEFAULT NULL,  
    Duration INT NOT NULL,
    FOREIGN KEY (SpaceshipID) REFERENCES Spaceships(SpaceshipID)
);
