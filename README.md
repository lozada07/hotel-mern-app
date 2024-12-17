# MERN Blog App

![Blog App)](https://res.cloudinary.com/ddd9ivydu/image/upload/v1703889443/uploads/qjnmleikdglnb1tp18ph.png)

### Prerequisites

**Node version 18.17 or later**

### Demo

**https://stayswift-mern.netlify.app/**

### Cloning the repository

```shell
https://github.com/lozada07/hotel-mern-app.git
```
## Server Configuration


1. **Environment Files**: Navigate to the `client` folder and create one file `.env`. Add the following content:

    ```plaintext
	VITE_BACKEND_URL=
    
	#STRIPE
 	VITE_STRIPE_API_KEY=
    ```
### Install Dependencies
```shell
npm i
```
### Start App
```shell
npm run dev
```
## Client Configuration

1. **Environment Files**: Navigate to the `server` folder and create one file `.env`. Add the following content:

    ```plaintext
	#DATABASE
	MONGODB_URL=
	
 	PORT="8000"
	JWT_SECRET_KEY=
 	FRONTEND_URL=
	COOKIE_DOMAIN="localhost"

    	#NODEMAILER
 	GMAIL_USER=
	GMAIL_PASSWORD=

    	#CLOUDINARY
	CLOUDINARY_CLOUD_NAME=
 	CLOUDINARY_API_KEY=
	CLOUDINARY_API_SECRET=

 	#STRIPE
 	STRIPE_API_KEY=
    ```
### Install Dependencies
```shell
npm i
```
### Start App
```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
| `install`           | Install dependencies of the app |


