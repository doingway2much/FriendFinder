# Coding Friend Finder

This App uses NODE.js + Javascript + Express + jQuery to complie a list of frinds and compare values based on statements they anwser.  Once a user comppets a survey their vlaues will be compared to all user values and the App will display the users with the closest values to yours.  


# Home Screen
![IMG1](https://github.com/doingway2much/FriendFinder/blob/master/app/img/CFF_1.jpg?raw=true)


# Survey Screen
![IMG2](https://github.com/doingway2much/FriendFinder/blob/master/app/img/CFF_2.jpg?raw=true)


#Instructions

1.  To install the app you will need to clone the repo

```
git clone https://github.com/doingway2much/FriendFinder.git
```

2.  Next you will need to install the necessary NOMM packages by running the following command (THis is posible cause we have a package.json files with all the packages needed)

```
npm install
```

3.  Set your port for your web server in the "server.js" file

```
var PORT = process.env.PORT || 8080;
```
