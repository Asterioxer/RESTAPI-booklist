Book List REST API
Overview
This REST API, developed using Node.js and Express.js, provides CRUD operations for managing a list of books stored in memory. The API supports standard HTTP methods for retrieving, adding, updating, and deleting book entries.

Features
Implements RESTful principles for structured API design.

Supports JSON-based data exchange.

Handles CRUD operations efficiently.

Enables testing via tools like Postman.

Installation & Setup
Prerequisites

Ensure you have:

-Node.js installed (Download Node.js)
-A terminal or command prompt

Steps to Set Up

1. Clone the repository:
   ```
   git clone https://github.com/Asterioxer/RESTAPI-booklist.git
   cd RESTAPI-booklist

2. Install dependencies:
   ```
   npm install

3. Start the server:
   ```
   node server.js

4. The API will be accessible at: http://localhost:3000


API Endpoints
1. Retrieve All Books
Method: GET

Endpoint: /books

Response Example:

```json
[
  { "id": 1, "title": "The Hobbit", "author": "J.R.R. Tolkien" },
  { "id": 2, "title": "1984", "author": "George Orwell" }
]
```

2. Add a New Book
Method: POST

Endpoint: /books

Request Body Example:

```json
{
  "title": "Brave New World",
  "author": "Aldous Huxley"
}
```
Response Example:

```json
{
  "id": 3,
  "title": "Brave New World",
  "author": "Aldous Huxley"
}
```

3. Update a Book
Method: PUT

Endpoint: /books/:id

Request Body Example:
```json
{
  "title": "Brave New World (Updated)",
  "author": "Aldous Huxley"
}
```
Response Example:
```json
{
  "id": 3,
  "title": "Brave New World (Updated)",
  "author": "Aldous Huxley"
}
```

4. Delete a Book
Method: DELETE

Endpoint: /books/:id

Response Example:
```json
{
  "message": "Book deleted successfully"
}
```


Testing the API
Using Postman
Open Postman.

Create a new request.

Test the following requests:

GET http://localhost:3000/books

POST http://localhost:3000/books

PUT http://localhost:3000/books/:id

DELETE http://localhost:3000/books/:id

Using cURL
Run the following commands:

```
curl -X GET http://localhost:3000/books
curl -X POST -H "Content-Type: application/json" -d '{"title":"Dune","author":"Frank Herbert"}' http://localhost:3000/books
curl -X PUT -H "Content-Type: application/json" -d '{"title":"Dune (Updated)","author":"Frank Herbert"}' http://localhost:3000/books/3
curl -X DELETE http://localhost:3000/books/3
```

Key Concepts
RESTful API Design – Follows REST principles for structured communication.

Express.js Framework – Handles efficient routing and middleware integration.

JSON Handling – Ensures clean data exchange.

HTTP Methods – Supports GET, POST, PUT, and DELETE.

License
This project is licensed under the MIT License.
