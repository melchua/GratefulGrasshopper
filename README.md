# Project Grasshopper: Mel Edition

### Summary

This project’s objective is to further the team’s knowledge and experience with mobile app development, React Native and various AWS technologies by making a Todo Application.

### Application Functionality

The cross-platform (iOS & Android) mobile Todo application will allow users, when authenticated, to create Todo items and to perform CRUD actions (update and delete) on those Todo items. The app should be intuitive and easy to use; if you think of other features or functionality that you believe would maximize users’ experience with the Todo app feel free to add those in!

### User Interface Requirements

-[ ] Authentication flow -[ ] Login/ Signup screens -[ ] Verification Code screen (after sign up) -[ ] Todos List Screen - List out and mark Todos as completed in a FlatList -[ ] Todo Creation -[ ] Todo Edit (re-use Creation UI?) -[ ] Todo Detail Screen (Location? Notes? Priority?) -[ ] Profile Screen - photograph(s), biography, Todo Completion Count, etc.
\*\* Try to keep UI components as simple as possible and reusable if possible.

### Frontend Technology Requirements

State management: MST - Use Mobx’s design patterns for accessing/mutating app state (** check out flow (generator) functions for asynchronous model actions)
https://github.com/mobxjs/mobx-state-tree
Navigation: React Navigation
https://github.com/react-navigation/react-navigation
** Be sure to keep in mind the user’s potential un-authenticated and authenticated states and how this will affect the app’s navigation stack(s)
Authentication: Amplify JS client library (link up with Cognito)
https://aws-amplify.github.io/docs/js/authentication
\*\* Look to keep clean separations from presentation logic and business logic in your code.

### Backend Technology Requirements

-[ ] Authentication: AWS Cognito
https://aws.amazon.com/cognito/ -[ ] Database: AWS AppSync + RDS database
https://aws.amazon.com/appsync/
https://aws.amazon.com/rds/
