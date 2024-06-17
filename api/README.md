# Spaceship Travel System API

Welcome to the Spaceship Travel System API repository. This API provides functionalities for managing spaceships, crew members, and missions within the space travel system.

## Overview

This API allows users to perform CRUD (Create, Read, Update, Delete) operations on spaceships, crew members, and missions. It includes endpoints for managing these entities and ensures session management, input validation, and error handling.

## Endpoints

### Spaceships

- **GET /spaceships**
  - Retrieve a list of all spaceships.

- **POST /spaceships**
  - Add a new spaceship.

- **GET /spaceships/:id**
  - Retrieve details of a specific spaceship.

- **PUT /spaceships/:id**
  - Update details of a specific spaceship (replaces the entire resource).

- **PATCH /spaceships/:id**
  - Partially update details of a specific spaceship.

- **DELETE /spaceships/:id**
  - Delete a spaceship.

### Crew Members

- **GET /crewmembers**
  - Retrieve a list of all crew members.

- **POST /crewmembers**
  - Add a new crew member.

- **GET /crewmembers/:id**
  - Retrieve details of a specific crew member.

- **PUT /crewmembers/:id**
  - Update details of a specific crew member (replaces the entire resource).

- **PATCH /crewmembers/:id**
  - Partially update details of a specific crew member.

- **DELETE /crewmembers/:id**
  - Delete a crew member.

### Missions

- **GET /missions**
  - Retrieve a list of all missions.

- **POST /missions**
  - Add a new mission.

- **GET /missions/:id**
  - Retrieve details of a specific mission.

- **PUT /missions/:id**
  - Update details of a specific mission (replaces the entire resource).

- **PATCH /missions/:id**
  - Partially update details of a specific mission.

- **DELETE /missions/:id**
  - Delete a mission.

## Understanding PATCH vs PUT

### PATCH (Partial Update)

PATCH is used when you want to apply partial modifications to a resource. It allows you to update specific fields of a resource without affecting the entire resource representation. For example, you can use PATCH to update the name or status of a spaceship without altering its other attributes.

### PUT (Update)

PUT is used to update a resource or create it if it doesn't exist. When you use PUT, you replace the entire resource with the new data provided in the request. If the resource does not exist, PUT may create it with the specified data. Use PUT when you want to completely replace the existing resource with a new representation.

## Usage

To get started with the Spaceship Travel System API:

1. Clone this repository.
2. Install dependencies (`npm install`).
3. Configure the environment variables as specified in `.env.example`.
4. Run the application (`node app.js`).
5. Access the API endpoints using Postman.