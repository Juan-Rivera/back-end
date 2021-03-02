Back-End for Spotify Song Suggester
## Dependencies:
-bcryptjs
-cors
-express
-jest
-jsonwebtoken
-knex
-knex-cleaner
-pg
-sqlite3

## Dev Dependencies:
-cross-env
-nodemon
-supertest

## Endpoint Summary Table
---
|Type     |Endpoint           |Description        |Auth|
|:-------:|:-----------------------:|:----------------------:|:--:|
|POST     |/api/auth/register          |Register User           |No  |
|POST     |/api/auth/login             |Login User              |No  |
|PUT      |/api/auth/:id |edit user's Name      |Yes |
|GET      |api/songs/                 |get all how-to's        |Yes  |
|GET      |/api/songs/save/:id              |get songs by user id        |Yes  |
|POST     |/api/songs/save/:id                 |save song to user          |Yes |
|DELETE   |/api/songs/:id              |remove song from user's saved list |Yes |

## Token must be in the header under Authorization for Auth endpoints


## Proposal

What problem does your app solve?
Finding more songs you might not otherwise find in the app. 
Avoid unnecessary recommendations on your home-page in the app.
Be as specific as possible; how does your app solve the problem?
Implement a Neural Network to do a classification on song features.

What is the mission statement?
Help users find and visualize songs that fit their personal taste.


## Features

What features are required for your minimum viable product?
Build a model to recommend songs based on history or picked song.
Create visuals to highlight differences between recommendations.
User input form to get predictions.
Page for user’s saved and favorite songs.
User registration.

What features may you wish to put in a future release?
See user’s favorite songs.
Group songs into playlists and folders (by the user).
Playlists by suggestor.
Filter personal favorites by genre, artist, ect
Song ranking after listening.
Thumbs-downing songs you dislike to re-work the suggestion.

What do the top 3 similar apps do for their users?
Pandora, Shazam, Spotify Radio Function. 
They allow users to listen to music they know, but they limit discoverability, We want to allow more customization in song generation, and have more sociability in user’s creations. IE Playlists.


## Frameworks - Libraries

What 3rd party frameworks/libraries are you considering using?
Node
Yup
Spotipy  - python wrapper for interacting with spotify API.
Flask
React 
Redux
Heroku
Docker
Tensorflow
axios
Do the APIs you need require you to contact them to gain access?
No
Are you required to pay to use said API(s)?
No
