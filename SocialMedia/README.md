
Library Management System

Library Management System for Portfolio created with SpringBoot and Hibernate using MVC architecture


## API Reference

#### Post an image as Post 

```http
  POST post/add-post-image
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|image with "file" and caption with "content" | `form-data` | Adds Student to the Database |

#### Register User
```http
  POST /user/add-user
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| email     | `string` |User Sign Up |

#### Fetch All Posts
```http
  POST /post/get-all
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|    | `string` | Fetches All the posts with Image Links |








## Features

-Loads Server side Posts with Images In react

-Form Validation On user Sign-up

-can Post images with content text as caption. 

-more features upcoming.

## Installation

do npm i in social-media folder.

npm start in social-media.

social-media backend is Spring Boot. open and run it through intellij

change application properties, update mysql username and password.
create database.

and update the spring.datasource.url in application properties
## Demo


do npm start in social-media folder