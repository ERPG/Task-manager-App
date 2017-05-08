[![MongoDB](https://github.com/FransLopez/logo-images/blob/master/logos/mongodb.png)](https://www.mongodb.com/)
[![NodeJS](https://github.com/FransLopez/logo-images/blob/master/logos/nodejs.png)](https://nodejs.org/)
[![AngularJS](https://github.com/FransLopez/logo-images/blob/master/logos/angularjs.png)](https://angularjs.org/)  
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

# TO-DO App using an API, MongoDB and Angular

[Demo](https://frans-todotasks.herokuapp.com/)

## Start server

To start the server you can just do

```
npm start && bower install
```

This will server static files under `public` folder and will listen to several endopoint to allow clients interact w/ the data

## Actions available

All these endpoints will start locally w/ `http://localhost:3000` 

Example: `http://localhost:3000/tasks`

### GET endpoints

```
curl http://localhost:3000/tasks
```

#### [GET] `tasks`

Get List ALL tasks

#### [GET] `task/:id` 

Get specific taks per id

#### [GET] `tasks/status/completed` 

Get done tasks

#### [GET] `tasks/status/pending` 

Get pending tasks

### POST endpoints

```
curl --data "title=buy cars" http://localhost:3000/tasks
```

#### [POST] `tasks` (http://localhost:3000/tasks)

To add a task. It only need a `title` value. The rest of the values (`done`, `createdAt`, `id`) will be added automatically

### PUT endpoints

```
curl -X "PUT" --data "done=true" http://localhost:3000/task/2394723sdfasdsa
```

#### [PUT] `task/:id` 

To update a task. It needs to receive one or more of the following values: `done`, `title` (even if not all are being updated). The rest value `completedAt`, `createdAt` will be added automatically

### DELETE endpoints

```
curl -X "DELETE" http://localhost:3000/task/asf830q34ks3
```

#### [DELETE] `task/:id` 

To remove a task. Only by passing an id the task will be removed.
