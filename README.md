# NodeJS Auth REST API example with Express, Mysql, and JWT
## Current Goal ( Phase 1 )
1: To build an opensource secure prebuilt api backend for web and mobile apps.

## Future Goal ( Phase 2 )
1: To convert this codebase into a mature headless CMS.

## Completed Features
1. User can sign up
2. User can sign in
3: Reset password
4: Forgot password ( email part pending )
6: CSRF token generator ( ideally this should be forst request and token should be in every request header after that )
7: User can update personal info

## Todo in phase 1
1: add generic contect crud, which can be used with any sort of api need.
2: add user roles.
3: write oendijg tests.
4: Get more suggestions, help, forks and stars.

## API endpoints

1. `POST /api/auth/signup`: Creates a new user
2. `POST /api/auth/signin`: Logs in a user
3. `POST /api/auth/getloggedinuserdata`: Get logged in user data (TO DO: Remove password from the sent fields)
4. `POST /api/auth/forgotpassword`: Email sending feature has to be added.

## Body Payload Specification
Signup expects

```js
{
    firstname: string,
    lastname: string,
    email: string,
    password: string
}
```

Signin expects

```js
{
    email: string,
    password: string
}
```
## Tools
* NodeJS/Express: Server
* MySQL: Storage
* JWT: Token based authentication
* bcryptjs: Password security
* winston/morgan: Logs
* Joi: Validations

## Available scripts
* `start`: Starts the server with node
* `start:dev`: Starts the server in watch mode
* `db:up`: Creates the database
* `db:down`: Drops the database
* `tables:up`: Creates database tables
* `db:init`: Creates both the database and tables

## Getting started

You can either fork this repository or clone it by starting your terminal, then change the directory to where you would like to save it and run

```sh
git clone https://github.com/desirekaleba/node-mysql-jwt-auth.git
```
Change to the newly downloaded directory with

```sh
cd node-mysql-jwt-auth
```

Rename the file named `.env.example` to `.env` and update the variable values with valid ones

Install the required dependencies with

```sh
npm install
```

Initialize the database with

```sh
npm run db:init
```

Start the app with

```sh
npm start
```

You can also start it in watch mode with

```sh
npm run start:dev
```

## Folder structure
```sh
.
├── README.md
├── package-lock.json
├── package.json
└── src
    ├── app.js
    ├── config
    │   ├── db.config.init.js
    │   └── db.config.js
    ├── controllers
    │   └── auth.controller.js
    ├── database
    │   ├── queries.js
    │   └── scripts
    │       ├── dbDown.js
    │       ├── dbUp.js
    │       └── tablesUp.js
    ├── index.js
    ├── middlewares
    │   ├── asyncHandler.js
    │   ├── checkEmail.js
    │   └── validatorHandler.js
    ├── models
    │   └── user.model.js
    ├── routes
    │   └── auth.route.js
    ├── utils
    │   ├── logger.js
    │   ├── password.js
    │   ├── secrets.js
    │   └── token.js
    └── validators
        └── auth.js
```

Steps to add new api : 
Step 1: Add new route in routes/auth.route.js
Step 2: create a new validator in validators/auth.js
Step 3: create new query in /database/queries.js
Step 4: Add new function in controllers/auth.controller.js
Step 5: Add new function in models/user.model.js
