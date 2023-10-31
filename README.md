# Setup and Run Locally.

To set up and run the application locally, follow these steps:

### 1. Clone the repository

```
git clone https://github.com/akhilr007/brewapps_assessment.git
cd brewapps_assessment

```

### 2. Install dependencies

Install the required Node.js dependencies:
`npm install`

### 3. Configure the MongoDB connection

Open the `src/config/database.js` file and update the MongoDB connection URL to point to your MongoDB database. You can use a local MongoDB or a cloud-based solution like MongoDB Atlas.
Or you can use the existing MongoDB configuration used (MongoDB Atlas).

### 4. Start the server

start the node.js server
`node index.js`

### 5. Access the API

The server will start and be accessible at http://localhost:8000. You can now use an API client like Postman to interact with the API endpoints as described above.

Please ensure that you have Node.js and MongoDB set up on your local machine before running the application. You may also need to adjust the configuration to suit your environment, such as changing the port or database connection settings.

# Bookstore RESTful API

This is a RESTful API for managing books. It provides basic CRUD (Create, Read, Update, Delete) operations for books and uses MongoDB as the database.

## API Endpoints and Usage

### 1. Create a New Book

- **Endpoint:** `http://localhost:8000/api/v1/books`
- **HTTP Method:** POST
- **Request Body:**
  - `title` (string): Title of the book.
  - `author` (string): Author of the book.
  - `summary` (string): Summary of the book.

Example Request:

```http
POST http://localhost:8000/api/v1/books
Content-Type: application/json

{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "summary": "A novel about the American Dream."
}

```

### 2. Get a List of All Books

- **Endpoint:** `http://localhost:8000/api/v1/books`
- **HTTP Method:** GET

Example Request:

`GET http://localhost:8000/api/v1/books`

### 3. Get Details Of a Specific Book

- **Endpoint:** `http://localhost:8000/api/v1/books/{bookId}`
- **HTTP Method:** GET

Example Request:

`GET http://localhost:8000/api/v1/books/603e9a8e30b3735be0666e4b`

### 4. Delete a Book

- **Endpoint:** `http://localhost:8000/api/v1/books/{bookId}`
- **HTTP Method:** DELETE

Example Request:

`GET http://localhost:8000/api/v1/books/603e9a8e30b3735be0666e4b`

### 4. Update a Book

- **Endpoint:** `http://localhost:8000/api/v1/books/{bookId}`
- **HTTP Method:** PUT

Example Request:

`PUT http://localhost:8000/api/v1/books/603e9a8e30b3735be0666e4b`

```
Content-Type: application/json

{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "summary": "A novel about the American Dream."
}

```
