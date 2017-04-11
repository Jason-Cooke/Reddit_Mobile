# Reddit Mobile
Reddit Mobile is a mobile version of [reddit](https://www.reddit.com/) using the React-Native Library. View the most up to date and trending reddit articles in an elegant UI.

## Installation
1. Open new terminal window
2. run `$git clone https://github.com/aarboleda1/Reddit_Mobile.git` - clone repo
3. run `$cd ./Reddit_Mobile`
4. run `$npm install` - install dependencies
5. run `$react-native run-ios`

## Features
1. Redux
2. Data persistence using `redux-persist` to display that content first before fetching for new content
3. Routing using react-router-native-flux
4. Refresh on scroll using RefreshControl

## Milestones and Tasks

**Basic:**
- [x] Use Redux.
- [x] Create a main screen that fetches from Reddit’s API (https://www.reddit.com/.json) and displays the basic content (author, title, thumbnail, up votes, etc) in a list.
- [x] Users should be able to pull to refresh the list.
- [x] Clicking on a specific item should transition to a different screen within the app. This screen's content can just simply display the same basic content. Users should be able to go back to lsthe main screen.

**Bonus Points:**

- [x] Be able to store the fetched content locally so that if you relaunch the app, it will display that content first before fetching for new content. I recommend using Redux Persist or AsyncStorage.
- [ ] Works on both iOS and Android.

## Todo
- Verify app works on Android platform

## Libraries Used
- redux
- redux-thunk
- react-native-router-flux
- redux-persist
- redux-thunk
- isomorphic-fetch

## License
The content of this repository is licensed under a MIT license.
[LICENSE](/LICENSE) file.


