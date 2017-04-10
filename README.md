# Reddit Mobile
Reddit Mobile is a mobile version of [reddit](https://www.reddit.com/). View the most up to date and trending reddit articles in an elegant UI.

## Installation
1. `$git clone https://github.com/aarboleda1/Reddit_Mobile.git` - clone repo
2. `$cd ./Reddit_Mobile`
3. `npm install` - install dependencies
4. `react-native run-ios` or `react-native run-ios`

## Features
1. Redux
2. Data persistence using `redux-persist` to display that content first before fetching for new content
3. Routing using react-router-native-flux
4. Refresh on scroll using RefreshControl

## Milestones and Tasks
- [x] Use Redux.
- [x] Create a main screen that fetches from Reddit’s API (https://www.reddit.com/.json) and displays the basic content (author, title, thumbnail, up votes, etc) in a list.
- [x] Users should be able to pull to refresh the list.
- [x] Clicking on a specific item should transition to a different screen within the app. This screen's content can just simply display the same basic content. Users should be able to go back to lsthe main screen.

**Bonus Points:**

- [x] Be able to store the fetched content locally so that if you relaunch the app, it will display that content first before fetching for new content. I recommend using Redux Persist or AsyncStorage.
- [x] Works on both iOS and Android.

## Troubleshooting
- Modify fetch-npm-browserify
- [React native: can't find variable self](http://stackoverflow.com/questions/37544189/react-native-error-cant-find-variable-self)

## License
The content of this repository is licensed under a MIT license.
[LICENSE](/LICENSE) file.


