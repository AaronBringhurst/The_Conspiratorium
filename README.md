# The_Conspiratorium

## Description
The Conspiratorium is a backend application that provides a RESTful API for a social networking platform. It allows users to share thoughts, react to friends' thoughts, and create a friend list. The API is built using Express.js for routing, MongoDB as the database, and Mongoose as the ODM.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Technologies](#technologies)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)
- [Video](#video)

## Installation
To get started with the Social Network API, follow these steps:

1. Clone the repository:
git clone https://github.com/AaronBringhurst/The_Conspiratorium
cd  The_Conspiratorium
Copy
2. Install dependencies:
npm install
Copy
3. Set up your MongoDB connection in `config/connection.js`.

4. Seed the database (optional):
npm run seed
Copy
5. Start the server:
npm start
Copy
## Usage

After installation, the API will be available at `http://localhost:3001`. Use a tool like [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/) to test the API routes.

## API Routes

### Users
- `GET /users` - Get all users
- `GET /users/:id` - Get a single user by ID
- `POST /users` - Create a new user
- `PUT /users/:id` - Update a user
- `DELETE /users/:id` - Delete a user
- `POST /users/:userId/friends/:friendId` - Add a friend
- `DELETE /users/:userId/friends/:friendId` - Remove a friend

### Thoughts
- `GET /thoughts` - Get all thoughts
- `GET /thoughts/:id` - Get a single thought by ID
- `POST /thoughts` - Create a new thought
- `PUT /thoughts/:id` - Update a thought
- `DELETE /thoughts/:id` - Delete a thought
- `POST /thoughts/:thoughtId/reactions` - Add a reaction
- `DELETE /thoughts/:thoughtId/reactions/:reactionId` - Remove a reaction

## Technologies

This Social Network API is built with the following technologies:

- **[Node.js](https://nodejs.org/)**: Runtime environment
- **[Express.js](https://expressjs.com/)**: Web application framework
- **[MongoDB](https://www.mongodb.com/)**: Database
- **[Mongoose](https://mongoosejs.com/)**: ODM for MongoDB
- **[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)**: Programming language

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is licensed under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Contributing
Contributions to the Social Network API are welcome! Here's how you can contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Questions
If you have any questions about the project, feel free to reach out:

- GitHub: [Aaron Bringhurst](https://github.com/AaronBringhurst)
- Email: bringhurst.aaron@gmail.com

## Video
here is a link to me testing the routes: https://drive.google.com/file/d/1GOG6wSGikIER12Gf1RE7T6R-wb5EQqK3/view