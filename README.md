# Reddit_Mobile
#Installation
$git clone https://github.com/aarboleda1/Reddit_Mobile.git
$cd ./Reddit_Mobile
$npm install
#Usage
#Milestones and Tasks
- [x] Use Redux.
- [x] Create a main screen that fetches from Reddit’s API (https://www.reddit.com/.json) and displays the basic content (author, title, thumbnail, up votes, etc) in a list.
- [x] Users should be able to pull to refresh the list.
- [x] Clicking on a specific item should transition to a different screen within the app. This screen's content can just simply display the same basic content. Users should be able to go back to lsthe main screen.

Bonus Points:

- [x] Be able to store the fetched content locally so that if you relaunch the app, it will display that content first before fetching for new content. I recommend using Redux Persist or AsyncStorage.
- [ ] Works on both iOS and Android.


Modify fetch-npm-browserify
http://stackoverflow.com/questions/37544189/react-native-error-cant-find-variable-self

Please directly change this module in node modules, 

node_modules> isomorphic-fetch> fetch-npm-browserify.js file Back:
var globalObject = typeof self === "undefined" ? global : self;
module.exports = globalObject.fetch.bind(globalObject);
//module.exports = fetch;

final product should look like this 
fetch-npm-browserify.js
`require('whatwg-fetch');
var globalObject = typeof self === "undefined" ? global : self;
module.exports = globalObject.fetch.bind(globalObject);`