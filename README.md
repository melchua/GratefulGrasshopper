# The Grateful Grasshopper

## A Drake Street Studios Joint

![Grasshopper Cartoon Image](https://s19532.pcdn.co/wp-content/uploads/2017/05/Screen-Shot-2017-05-19-at-8.51.28-AM-1.png)

### Summary

Our goal is to use new technologies along with React-Native to get an app on the AppStore.

### Application Functionality

The cross-platform (iOS & Android) mobile Gratitude application will allow users, when authenticated, to create Gratitudes and to perform CRUD actions (update and delete) on those Gratitudes.

### User Interface Requirements

- [ ] Authentication flow
- [ ] Login/ Signup screens
- [ ] Verification Code screen (after sign up)
- [ ] Gratitudes List Screen - List out Gratitudes in a FlatList
- [ ] Gratitude Creation
- [ ] Gratitude Edit (re-use Creation UI?)
- [ ] Gratitude Detail Screen (Location? Notes?)
- [ ] Profile Screen - ?
      \*\* Try to keep UI components as simple as possible and reusable if possible.

### Frontend Technology Requirements

- State management: MST - Use Mobx’s design patterns for accessing/mutating app state (\*\* check out flow (generator) functions for asynchronous model actions)
  https://github.com/mobxjs/mobx-state-tree
- Navigation: React Navigation
  https://github.com/react-navigation/react-navigation
  \*\* Be sure to keep in mind the user’s potential un-authenticated and authenticated states and how this will affect the app’s navigation stack(s)
- Authentication: Amplify JS client library (link up with Cognito)
  https://aws-amplify.github.io/docs/js/authentication
  \*\* Look to keep clean separations from presentation logic and business logic in your code.
  This shoud work for both iOS and Android.
- UI Framework: NativeBase
  https://nativebase.io

### Backend Technology Requirements

- [ ] Authentication: AWS Cognito
      https://aws.amazon.com/cognito/
- [ ] Database: AWS AppSync + Dynamo database
      https://aws.amazon.com/appsync/
      https://aws.amazon.com/dynamodb/
