# nate.challenge.ios

# Brief
Show us you can create a small native iOS app, from scratch, that uses a provided API.
We'd love for you to present, and explain to us, your solution =]

### Running the API
The API provided can be consumed via GraphQL or REST, and are hosted in Docker containers, to run them:
1. Install and run Docker on your mac (includes Docker Compose): https://docs.docker.com/desktop/mac/install/
2. In the root directory of this project, run command `yarn up` to pull and run the prepared Docker images
3. Once the containers are running the APIs will be available for use
4. [Optional] Visual Studio Code has a useful Docker extension to visualise the state of images and containers

# Specification

Core deliverables are required, and we hope to see some of the advanced deliverables.
- You can use either the GraphQL or REST API we provide (no preference)
- Explore the API as much as you need to, reviewing the code may help but should not be necessary
- You can use any UIKit or SwiftUI components you like (no preference)
- Third party libraries are allowed, but should be used purposefully when there isn't a reasonable solution in the core libraries
- Keep in mind the UX, Handling of errors and edge cases, and Readability of code and project structure etc.

### Core Deliverables
- Build an iOS app [min target: iOS 14+] that displays products, and a detail view of each product
- Implement pagination with the endpoints provided for fetching products, with the ability to refresh
- In the detail view a user should be able to at least
  - view at least one image with the product details listed
  - view the product web page
- Include at least one meaningful Unit Test and UI Test each

### Advanced Deliverables
- Display multiple images where products have multiple, feel free to get creative in choice of UI!
- Ability to add / update / remove products via API, feel free to get creative here too!
- Add some design / animations, completely optional but don't feel limited
- Additional Unit / UI Automation Test(s)

### Submission Format
Create a git repository on GitHub/BitBucket/GitLab with your project including README file.
- We'd like to see your git workflow if possible (branches and commit history)
- Please make it accessible to james@nate.tech, mauro@nate.tech, and rado@nate.tech

# References

### API
GraphQL and REST Example requests are available to explore and experiment with in the `Insomnia.json` file
1. Download Insomnia Core at https://insomnia.rest
2. Import into Insomnia Core Workspace https://support.insomnia.rest/article/52-importing-and-exporting-data
3. Feel free to change the parameters in any of the requests to test edge cases
Access them via:
- Postgresql: Port 6543 (See .env for the full connection string)
- REST: http://localhost:3000
- GraphQL: http://localhost:4000/graphql

### Database
Any modifications to the product data will not be persisted if the container is shutdown.
- If for any reason you'd like to reset both the APIs and DB Service
  - run command `yarn down` to remove all containers and `yarn up` again

### Documentation
- Prisma: https://www.prisma.io/docs/
- GraphQL: https://graphql.org/learn/
- REST: https://www.codecademy.com/article/what-is-rest
- Express: http://expressjs.com
- TypeGraphQL: https://prisma.typegraphql.com
- Docker: https://docs.docker.com/desktop/mac/install/
