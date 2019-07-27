# MERN Stack Template Project

This is a MERN stack template for future projects of mine.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- Download Node LTS version here: <https://nodejs.org/en/download/>
- Download VSCode from here: <https://code.visualstudio.com/>
- Install both before continuing
- Download MongoDB from here <https://www.mongodb.com/download-center/community> don’t do anything with it just yet.

### Installing & Starting

- Open Visual Studio Code (Referred to as VSCode)
- In the left side bar, click the square icon to open the extensions menu
- Install the extensions:
  - Prettier
  - EditorConfig for VSCode
  - Visual Studio Intellicode
  - ESLint
- After installing ESLint, go into its settings by clicking the cog in it’s listing in the extenstion tab, and clicking ‘Configure Extenstion Settings’
- In here, enable auto fix on save.
Once thats done, close the ESLint tab that is open, and press Command-Shift-P on Mac, or Ctrl-Shift-P on windows, and type ‘Git Clone’ into the box that appears and hit enter.
- In the box that then comes up, enter:
<https://github.com/bradwindy/mern-stack-template>
- Then press enter, then once that is done, click open in the bottom right.
- Once the project loads up, on both Mac and windows, press Ctrl-BACKTICK (the key next to the number 1 on your kb). This opens terminal and is a super useful shortcut :)
- Checkout working by typing: `git checkout --track origin/working`
- In the terminal type `npm install` and hit enter.
- Once that finshes, the project is ready to go :)

- Open the zip file mongodb came in, for mac users, go to the bin folder and double click mongod to start mongoDB. Windows users look for a similar file and run it.
- Start the web page and server by typing `npm run dev` into terminal.
- The site is now available at <http://0.0.0.0:8080/>

## Running the tests

Test information and breakdown to come soon :)

## Deployment

Deployment information coming soon :)

## Built With

- [MongoDB](https://github.com/mongodb/mongo) - Database used. Will change in the future when API used instead.
- [React](https://github.com/facebook/react) - Frontend JavaScript library.
- [Express](https://github.com/expressjs/express) -Server/routing API for web app.
- [Node](https://github.com/nodejs/node) - Backend JS runtime.
- [Webpack](https://github.com/webpack/webpack) - JS bundler for performance and ease of deployment.
- [Sass](https://github.com/sass/sass) - Used for easier CSS styling.
- [Bootstrap](https://github.com/twbs/bootstrap) - Frontend framework for website elements and styling.

## Author

- **Bradley Windybank**
- **arkon**
- A fork of <https://github.com/arkon/MERN-boilerplate>
