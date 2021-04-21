# nate.challenge.ios

# Brief
Show us you can create a small native iOS app, from scratch, that uses a provided API.
We'd love for you to present, and explain to us, your finished app =]

Core deliverables are required, and we hope to see some of the advanced deliverables.
- You can use either the GraphQL API or REST API we provide
- You can use any UIKit or SwiftUI components you like
- Third party libraries are allowed, but should be used purposefully
- Keep in mind UX, Performance, and Readability of code and project structure etc.

## Specification

### Core Deliverables
- Build an iOS app [min target: iOS 13+] that displays products, and a detail view of each product
- Implement pagination with the endpoints provided for fetching products
- In the detail view a user should be able to view the product web page, and view at least one image with the product details
- At least one meaningful Unit Test

### Advanced Deliverables
- Display multiple images where products have multiple, feel free to get creative!
- Ability to add / update / remove products via API endpoints provided, feel free to get creative here too!
- Add some design / animations, completely optional but don't feel limited
- Additional Unit / Automation Test(s)

### Submission Format
Create a git repository on GitHub/BitBucket/GitLab with your project including README file.
- Please make it accessible to james@nate.tech and mauro@nate.tech

## References

### APIs
Graph and Rest Examples are in `Insomnia.json` file
1. Download Insomnia Core at https://insomnia.rest
2. Import into Insomnia Core Workspace https://support.insomnia.rest/article/52-importing-and-exporting-data

##### Access
- GraphQL: http://localhost:4000/graphql
- REST: http://localhost:3000

### API Setup using Docker
To run the APIs locally (REST, GraphQL, and the DB Service) - install Docker and Docker Compose
1. Follow the Docker Compose install guide (including the Docker install Pre-Eq) https://docs.docker.com/compose/install/
2. In the root directory of this project, run command `sudo docker-compose up` to pull and run the prepared Docker images
3. Once the containers are running the APIs will be available

##### Note
Any modifications to the product data will not be persisted if the container is shutdown.
- If you need to reset the DB data while the containers are running
  - set up a file at `prisma/.env` and write inside `DATABASE_URL="postgres://productUser:password@localhost:5432/product"`
  - run command `yarn reset`
- If for any reason you'd like to reset both the APIs and DB Service
  - run command `sudo docker-compose rm` to remove all containers and `sudo docker-compose up` again

### Additional Documentation
- Prisma: https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/crud
- Nexus: https://nexusjs.org/adoption-guides/prisma-users
- Rest: https://github.com/prisma/prisma-examples/tree/master/typescript/rest-express
- The repository also contains code for building the Docker Images from scratch and running the services locally 
