# yuru-chara

_An encyclopaedia for Japanese mascots_

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Features](#features)
- [Future Features](#future-features)
- [Built With](#built-with)

## Introduction

<div>
<Img src="https://res.cloudinary.com/dygjcgbh3/image/upload/v1634908160/IMG_2588_tutvmt.png" width="200px"/>
<Img src="https://res.cloudinary.com/dygjcgbh3/image/upload/v1634908161/IMG_2589_yh241d.png" width="200px"/>
<Img src="https://res.cloudinary.com/dygjcgbh3/image/upload/v1634908160/IMG_2590_xu5ghh.png" width="200px"/>
<Img src="https://res.cloudinary.com/dygjcgbh3/image/upload/v1634908161/IMG_2591_bhqtjz.png" width="200px"/>
</div>

yuru-chara (**ゆるキャラ**): a Japanese term for mascot characters; created to promote a place or region, event, organisation or business.

yuru-chara is a mobile application built to teach Japanese culture through mascot characters. Built using React Native with Expo for the front end, and Express.js and Mongoose on the back end.

## Getting Started

In order to run yuru-chara it is necessary to install and set-up Expo. Please refer to the documentation on the Expo website for further information. This can be run on any Windows or Apple PC. Additionally, MongoDB is required in order to run the back-end database.

1. Clone this repo and enter:

```bash
git clone https://github.com/kirstinbuchanan/yuru-chara.git
cd client
```

2. Run `npm install` to install client dependencies into your local repo
3. Run `npm start` to generate a QR code which can be read on your mobile (you will need the [Expo Go](https://apps.apple.com/gb/app/expo-client/id982107779) mobile application)
4. Return to the root directory and go into the server folder

```bash
cd ..
cd server
```

5. Run `npm install` to install server dependencies
6. Make sure MongoDB is running
7. Run `npm run seed` to populate your database
8. Run `node index.js` or `nodemon index.js` to start the back-end
9. Start learning about Japanese mascots!

## Features

- Search for Mascots in the database by name (English and Japanese), city or prefecture
- View individual mascot details
- Create mascots that are missing in the database

## Future Features

- Enable user authentication
- Allow users to edit incorrect information
- Allow users to upvote or downvote mascots
- Implement verification service upon mascot creation or revision to confirm if mascot information is correct
- Explore page: a mascot of the month to advertise specific mascots
- Display a map of Japan divided into regions for a more visual search
- Plan a trip to where a mascot is located

## Built with

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Lottie Animations](https://lottiefiles.com/)
- Node.js
- Express.js
- MongoDB
- Mongoose
