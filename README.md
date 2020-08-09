# nate.challenge.ios

# Brief

## Core
- Build an iOS app that displays many products
- A detail view can be displayed for an individual product
- You can use a GraphQL or REST api
- You can use any UIKit or SwiftUI components you like
- Third party libraries are allowed, but should be used purposefully
- Keep in mind UX, Performance, and Readability of code and project structure etc.
- We'd love for you to present and explain to us your finished app =]

## Bonus
- Ability to add products via api, feel free to get creative here!
- Implement seamless pagination with the endpoints provided
- Add some style / design / animations, completely optional but don't feel limited
- A few Unit / Automation Test(s)

## Setup

### Project
- Run `yarn`

### Prisma
- Set DATABASE_URL in prisma/.env to a PostgreSQL connection string
- Check the contents of prisma/schema.prisma is up to date
- (Optional) Run `yarn -s prisma migrate save --experimental`
- (Optional) Run `yarn -s prisma migrate up --experimental`
- Run `yarn -s prisma generate`

### Graph
- Access: `localhost:4000/graphql`
- Dev: `yarn dev:graph`
- Prod: `yarn build && yarn start:graph`

### Rest
- Access: `localhost:3000`
- Dev: `yarn dev:rest`
- Prod: `yarn start:rest`

### Insomnia
- Graph and Rest Examples in insomnia.json
- Import into Insomnia Core, download at https://insomnia.rest

### Studio
- To Edit the Database run `yarn prisma studio --experimental`

## Documentation

- Prisma: https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/crud
- Nexus: https://nexusjs.org/adoption-guides/prisma-users
- Rest: https://github.com/prisma/prisma-examples/tree/master/typescript/rest-express
