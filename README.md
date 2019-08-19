![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.8.6-blue.svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/9aaad5da-5fcb-4026-97b4-9d6f628206a3/deploy-status)](https://app.netlify.com/sites/brav/deploys)

# Frontend - Brāv

You can find the deployed project at [beabravone.com](http://www.beabravone.com/).

## Contributors

| [Andy Bettisworth](https://github.com/wurde) | [Angel Torres](https://github.com/angel-torres) | [Brennon Nuckols](https://github.com/brennuck) | [Michael Falahee](https://github.com/Mjfalahee) | [Rogelio Caballero](https://github.com/rogercp) |
| :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: |
[<img src="https://github.com/favicon.ico" width="15">](https://github.com/wurde) | [<img src="https://github.com/favicon.ico" width="15">](https://github.com/angel-torres) | [<img src="https://github.com/favicon.ico" width="15">](https://github.com/brennuck) | [<img src="https://github.com/favicon.ico" width="15">](https://github.com/Mjfalahee) | [<img src="https://github.com/favicon.ico" width="15">](https://github.com/rogercp) |
| [<img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15">](https://www.linkedin.com/in/bettisworth) | [<img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15">](https://www.linkedin.com/) | [<img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15">](https://www.linkedin.com/) | [<img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15">](https://www.linkedin.com/) | [<img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15">](https://www.linkedin.com/) |

<br>

## Project Overview

[Trello Board](https://trello.com/b/5sU9ZybM/labs-14-brav)

[Vision Document](https://www.notion.so/Brav-c00f84c629f84560be196d93846a22cf)

[UX Design files](https://www.notion.so/Brav-c00f84c629f84560be196d93846a22cf#b38b8955c85f4bb8ad52863f7e478b03)

Our world is plagued with conflict and devastating violence everywhere you look: bullying in schools, violence in our homes, on the streets, across borders, everywhere. Brāv trains anyone in conflict management who in turn manages the conflicts of others directly on the site.

### Key Features

1. On-boarding for new users will include sign-in, sign-up, and logout.
2. User settings. A user will be able to change their password.
3. Manage Cases. A user will be able to edit the details of a case.
4. Search Mediators. A user will be able to filter mediators.
5. Schedule sessions for conflict resolution discussion— assign Mediator, and email third party using SendGrid.
6. Request to be mediator. The onboarding for mediators will involve a manual approval process that includes Stripe Connect.
7. Chat with a mediator using in-app messaging.
8. Admin Views for viewing mediators, cases, and schedules

## Tech Stack

### Front end built using:

#### React

We are using the React library to render the interface and Redux for state management. React is lightweight and unopinionated, so it's perfect for building an MVP.

#### Front end deployed to `Netlify`

#### [Back end](https://github.com/labs14-brav/Backend) deployed to `Heroku`

We are using a PostgresSQL database deployed on Heroku. To access the database we are implementing a RESTful API using NodeJS, Express, and knex. Node lets you write JavaScript on both the front-end and back-end, which increases readability and reduced context-switching.

## APIs

#### Authentication API - Firebase

This API is used to authenticate the individuals, mediators and admin to log into the system using their email and password. It handles identity related tasks.

#### Payment API - Stripe

This API is connected to payments between users and mediators. It acts as a secure payment solution with multiple payment options. It will allow users to pay mediators for their time and services securely, and easily.

#### Email API - SendGrid

SendGrid allows us to send secure emails. For example when a user forgets their password and needs to reset or when they need to receive email reminders or notifications.

#### Analytics API - Mixpanel

This API enables insights into users behavior. User behavior can be broken down into discrete actions and recorded using Mixpanel. The user analytics will help inform feature development.

## Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

    *  REACT_APP_API_URL - the Backend URL.

## 5️⃣ Content Licenses

🚫For all content - images, icons, etc, use this table to document permission of use. Remove the two placeholders and add you content to this table

| Image Filename | Source / Creator | License                                                                      |
| -------------- | ---------------- | ---------------------------------------------------------------------------- |
| doodles.png    | Nicole Bennett   | [Creative Commons](https://www.toptal.com/designers/subtlepatterns/doodles/) |
| rings.svg      | Sam Herbert      | [MIT](https://github.com/SamHerbert/SVG-Loaders)                             |

## Testing

We are using the `@testing-library/react` dependency for Frontend tests.

## Installation Instructions

Run the following commands to install all dependencies:

```
npm install
```

## Other Scripts

    * build - creates a build of the application.
    * start - starts the production server after a build is created.
    * test - runs tests.

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Backend Documentation](https://github.com/labs14-brav/Backend/blob/master/README.md) for details on the backend of our project.
