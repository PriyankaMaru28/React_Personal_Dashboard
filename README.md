# React Personal Dashboard

## Overview

    A personal dashboard application using React.js that displays a user's personal information, a to-do list, and the current weather in their city. The application is responsive and works on both desktop and mobile devices.

## Steps to Install and Run the Project

1. git clone `https://github.com/PriyankaMaru28/React_Personal_Dashboard.git`

2. cd `React_Personal_Dashboard`

3. Execute `npm install` to install the node modules.

4. Execute `npm run` to run the application.

5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Features:

- User can view thier personal details and weather details of thier city
- User can maintain a Task List
  - User can add a task
  - User can delete the task
  - User can mark the task as completed when done

## Project Structure

The project structure is organized as follows:

    React_Personal_Dashboard/
            ├── App/                     #Contains React.js app code
            │── public/                  #Contains Static assests
            └── src/                     #Contains project files
                │──components/           #Contains React components
                │   │── Todo             #Contains all the TODO Components
                │   │── User             #Contains all the UserProfile Component
                │   └── Weather          #Contains the Weather Components
                └──redux                 #Contains the code for redux for state managemnet
                    │── actions          #Contains the actions
                    │── reducer          #Contains the logic to update state based on actions.
                    │── constant         #Contains the Action Constants
                    └── store            #Centralized State of the application
            ├── .env                     #Contains environment variables
            ├── .gitignore               #Specifies files and directories to ignore in Git
            ├── package.json             #Contains project dependencies and scripts
            └── README.md                #Project documentation

## Technologies Used

- [React.js](https://react.dev/)
- [Styled Components](https://styled-components.com/docs)
- [Tomorrow.io Weather API](https://docs.tomorrow.io/reference/weather-forecast)
