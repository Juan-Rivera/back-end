Back-End for Spotify Song Suggester
## Dependencies:
bcryptjs
cors
express
jest
jsonwebtoken
knex
knex-cleaner
pg
sqlite3

## Dev Dependencies:
cross-env
nodemon
supertest


☝️ Proposal

What problem does your app solve?
Finding more songs you might not otherwise find in the app. 
Avoid unnecessary recommendations on your home-page in the app.
Be as specific as possible; how does your app solve the problem?
Implement a Neural Network to do a classification on song features.

What is the mission statement?
Help users find and visualize songs that fit their personal taste.


💡 Features

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


🛠 Frameworks - Libraries

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


🧮 For Data Scientists

Describe the established data source with at least rough data able to be provided on day one.
Dataset acquired from kaggle, stored in postgresql database.
Write a description for what the data science problem is. What uncertainty or prediction are you trying to discover? How could this data be used to find a solution to this problem?
What kind of target output can you deliver to the Web/UX/iOS teams to work with? Is it in JSON format or something else?
Output will be JSON.


🎯 Target Audience

Who is your target audience? Be specific.
Spotify Users, music-lovers

What feedback have you gotten from potential users?
None yet 

Have you validated this problem and your solution with a target audience? Describe how,
None yet


🔑 Prototype Key Feature(s)

How long do you think it will take to implement these features?
2-3 days, 4th day for debugging

Do you anticipate working on stretch functionality after completion of a Minimal Viable Product?
Most likely

