# Game Lobby Server [![Build Status](https://travis-ci.org/cynical89/game-lobby-server.svg?branch=master)](https://travis-ci.org/cynical89/game-lobby-server) [![Coverage Status](https://coveralls.io/repos/github/cynical89/game-lobby-server/badge.svg?branch=master)](https://coveralls.io/github/cynical89/game-lobby-server?branch=master)
This is a sample of the game lobby server for multiplayer online games.

* This is a 3 part project. This is the server for the game lobby. It requires the Game-Lobby-Client and the Unity-Client

## Requirements
* [Node.js](https://nodejs.org/en/) (Version 5 and up recommended)
* [CouchDB](http://couchdb.apache.org/) (For storing and accessing information)
* [Unity3D](https://unity3d.com/get-unity/download) (Version 5 and up.)

* [Game-Lobby-Client](https://github.com/cynical89/game-lobby-client) (Server for the lobby client)
* [Unity Client](https://github.com/cynical89/unity-client) (Unity game this client executes)

### Installation

* Clone down the repository.
```
git clone https://github.com/cynical89/game-lobby-server.git
```

* Install packages (from inside the game-lobby-client folder).
```
npm install
```

* Install CouchDB
[Install Instructions](https://wiki.apache.org/couchdb/Installation)

* Add initial user to the db
```
 Install Make and run make to make the database and add the user
 OR
 Go to http://127.0.0.1:5984/_utils/ and make a database called 'gcusers' and add a document using info from  'account.json'
 ```

* Start it up.
```
npm start
```

* Enjoy!
