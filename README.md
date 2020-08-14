# nate.challenge.ios

# Brief
Show us you can create a small native iOS app from scratch that uses a provided API.
We'd love for you to present and explain to us your finished app =]

## Specification

### Core Deliverables
- Build an iOS app that displays many products
- A detail view can be displayed for an individual product
- You can use a GraphQL or REST API
- You can use any UIKit or SwiftUI components you like
- Third party libraries are allowed, but should be used purposefully
- Keep in mind UX, Performance, and Readability of code and project structure etc.
- One meaningful Unit Test

### Bonus Deliverables
- Ability to add products via API, feel free to get creative here!
- Implement seamless pagination with the endpoints provided
- Add some style / design / animations, completely optional but don't feel limited
- More Unit / Automation Test(s)

### Submission Format
Create a git repository on GitHub/BitBucket/GitLab with your project including README file.

## References
### API
Graph and Rest Examples are in `Insomnia.json` file

1. Download Insomnia Core at https://insomnia.rest
2. Import into Insomnia Core Workspace https://support.insomnia.rest/article/52-importing-and-exporting-data

### Backend Setup using Docker
To run the backend setup locally (REST API, GraphQL and DB Service) - install Docker and Docker Compose
 
1. Follow the Docker Compose install guide (including the Docker install Pre-Eq) https://docs.docker.com/compose/install/
2. In the root directory of this project, run command `sudo docker-compose up` to pull and run the prepared Docker images

Note: In this setup the DB data will persist in the Docker Container unless the Container is removed. 

If for any reason you'd like to start from a clean slate again - run command `sudo docker-compose rm` to remove all containers and `sudo docker-compose up` again

### Additional Documentation

- Prisma: https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/crud
- Nexus: https://nexusjs.org/adoption-guides/prisma-users
- Rest: https://github.com/prisma/prisma-examples/tree/master/typescript/rest-express
- The repository also contains code for building the Docker Images from scratch and running the services locally 
