# Reddit Mobile
Reddit Mobile is a mobile version of [reddit](https://www.reddit.com/) using the React-Native Library. View the most up to date and trending reddit articles in an elegant UI.
## Prerequisites
- You will need Node.js, Watchman, the React Native command line interface, and Xcode.
- Please go to [React Native Setup](https://facebook.github.io/react-native/docs/getting-started.html) to install React Native

## Installation
1. Open new terminal window
2. `git clone https://github.com/aarboleda1/Reddit_Mobile.git` - clone repo
3. `cd ./Reddit_Mobile`
4. `npm install` - install dependencies
5. `react-native run-ios`

## Features
- Redux
- Fast relaunch using `redux-persist` to display that content first before fetching for new content
- Routing using react-router-native-flux
- Refresh on scroll using RefreshControl

## Milestones and Tasks

**Basic:**
- [x] Use Redux.
- [x] Create a main screen that fetches from Reddit’s API (https://www.reddit.com/.json) and displays the basic content (author, title, thumbnail, up votes, etc) in a list.
- [x] Users should be able to pull to refresh the list.
- [x] Clicking on a specific item should transition to a different screen within the app. This screen's content can just simply display the same basic content. Users should be able to go back to lsthe main screen.

**Bonus Points:**

- [x] Be able to store the fetched content locally so that if you relaunch the app, it will display that content first before fetching for new content. I recommend using Redux Persist or AsyncStorage.
- [ ] Works on both iOS and Android.

## Libraries used and why I chose them
- **_redux-thunk_** 
    - To deal with the async action of fetching data from the Reddit API.
- **_react-native-router-flux_**
    - Strong community interest
    - Redux type patterns
    - Easy to understand and well designed API
        * Resources I explored before making decision
            * http://blog.paracode.com/2016/01/05/routing-and-navigation-in-react-native/
            * https://github.com/jondot/awesome-react-native
            * https://medium.com/@spencer_carli/exploring-navigators-in-react-native-869b6ab47e0f
- **_redux-persist_**
    - Easy to use `autoRehydrate(config)` method out of the box

## Folder Directory Guideline
- All of my work is in the `src` folder
* **_/src_**
   - **_/actions_** _all redux actions_
   - **_/components_** _In the root of this folder are the 3 main components that make up the UI_        
     - **_/common_** _Reusable components that are used throughout the main components_
        + ItemsList.js - list view
        + ListItem.js - list component
        + SelectedItem.js - screen view after clicking on list item
   - **_/images_**    
   - **_/reducers_** 
   + app.js - _main entry point into app_    
   + configureStore.js - _redux store configuration in the app_
    
## Todo
- Verify app works on Android platform
- Improve header UI component
- The refresh feature works, but I plan to refactor to keep state of list on refresh

## Miscellaneous
**Versions**
- react-native-cli: 2.0.1
- react-native: 0.43.2
- react: 16.0.0-alpha.3

## License
The content of this repository is licensed under a MIT license.
[LICENSE](/LICENSE) file.


