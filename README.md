# MusicHub - Spotify Inspired Music App

![MusicHub Banner](https://github.com/saurabh7998/MusicHub/blob/main/public/MusicHub-Preview.png)

MusicHub is a full-stack web application that provides a Spotify-inspired music experience. The app allows users to explore a wide range of songs, albums, and playlists, powered by the open-source Spotify Web API. Users can search for songs, like their favorite tracks, and create personalized playlists.

## App URL
[https://music-hub-saurabhg.netlify.app/](https://music-hub-saurabhg.netlify.app/)

## Technologies Used
- Frontend: React.js, Material UI (MUI), Redux (Redux Toolkit), React Hooks
- Backend: Node.js, Express.js
- Database: MongoDB

## How Authentication Works

MusicHub has its own authentication mechanism. When a user signs up or logs in from the UI, a request is sent to the backend service. The backend then generates a JWT (JSON Web Token) and sends it back as a response. This JWT token is stored in the browser's local storage. Subsequently, if a user is already logged in and has a valid JWT token, they do not need to log in again, as the tokens will match.

### JWT (JSON Web Token) - Overview

JWT is a compact, URL-safe means of representing claims to be transferred between two parties. In the context of MusicHub, the JWT token serves as a secure way to identify users and manage their authentication state without relying on sessions or cookies. It contains encoded user information and an expiration time, signed with a secret key on the server side.

## Features

- Search: Users can search for songs using the Spotify API and get a list of matching tracks.
- Like Songs: Logged-in users have the ability to like their favorite songs.
- Create Playlists: Authenticated users can create their own playlists and manage them.
- Home Page: The home page showcases top albums and playlists as cards, which can be clicked to explore the entire playlist.
- Authentication: Secure user authentication and password hashing using MongoDB for storage.

## Installation and Setup

If you want to run the MusicHub app locally or contribute to its development, follow these steps:

1. Clone the repository: `https://github.com/saurabh7998/MusicHub`
2. Install frontend dependencies: `npm install`
3. Clone the repository: `https://github.com/saurabh7998/MusicHubServer`
4. Install backend dependencies: `npm install`
5. Set up MongoDB: Make sure you have MongoDB installed and running locally or provide the connection string in `backend/.env` file.
6. Start the frontend and backend servers: In separate terminal windows, run `cd frontend && npm start` and `cd backend && npm start` respectively.
7. Access the app in your browser at `http://localhost:3000/`.

## Contributing

Contributions to MusicHub are welcome! Whether you find a bug, have a suggestion, or want to add new features, feel free to submit a pull request. Please follow the project's coding standards and guidelines when contributing.

## Future Plans

MusicHub is an ongoing project, and I plan to add more exciting features in the future, such as:

- User Profile: Allow users to customize their profiles and update personal information.
- Collaborative Playlists: Enable users to share and collaborate on playlists with friends.
- Social Sharing: Add social media sharing options for playlists and liked songs.
- Improved Recommendations: Enhance the recommendation engine for personalized music suggestions.

Stay tuned for updates and feature enhancements!
