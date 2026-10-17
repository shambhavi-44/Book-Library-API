# Book Library Management API

## Project Overview

The Book Library Management API is a backend application developed using Node.js and Express.js. It allows users to manage book records through REST API endpoints.

## Features

- View all books
- View a book by ID
- Add new books
- Update existing books
- Delete books
- Validate book information
- Handle invalid requests and missing books

## Technologies Used

- Node.js
- Express.js
- JavaScript
- REST API
- Postman for API testing

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | / | Welcome message |
| GET | /books | Retrieve all books |
| GET | /books/:id | Retrieve a book by ID |
| POST | /books | Add a new book |
| PUT | /books/:id | Update a book |
| DELETE | /books/:id | Delete a book |

## How to Run

1. Install Node.js.
2. Open the project folder in a terminal.
3. Install dependencies:

   npm install

4. Start the server:

   node server.js

5. Open http://localhost:3000 in a browser.

## Testing

API endpoints can be tested using Postman.

## Data Storage

Book records are stored in an in-memory JavaScript array. Changes are lost when the server restarts.

## Author

Developed as part of a Backend Development Internship.