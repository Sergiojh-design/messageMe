# MessageMe
A simple messaging app that allows users to send and receive messages to and from other users.

Table of contents
==================

<!--ts-->
  * [Dependencies](#Dependencies)
  * [Installing](#Installing)
  * [Running](#Running)
  * [Authors](#Authors)
<!--te-->

## Getting Started
These instructions will give you a copy of the project and allow you to run on a Ubuntu server.See deployment for notes on deploying the project on a live system.

## Dependencies
Development environment for the software and other tools to build, test and push.
* React
* Bootstrap
* Django
* SQLite
* Firebase

## Installing
How to get a environment running

Install node
```
 1.) curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
 2.) . ~/.nvm/nvm.sh
 3.) nvm install node
```
Install git
```
 sudo apt update -y
 sudo apt install git -y
```
clone Message me repo
```
git clone https://github.com/Sergiojh-design/messageMe.git
```
Install python and django
```
sudo apt install python3-pip -y
pip3 install django
python3 -m pip install django-cors-headers
python3 -m pip install djangorestframework

```

## Running
To run firebase cd into reactapp and create a .env.local file with the following format (ASK OWNER FOR INFO)

To run Django server, cd into root directory
```
python3 manage.py runserver
````
To run React Frontend application (in new terminal), cd into reactapp
```
npm install
npm run build
npm start
```

#### Sign up
![MessageMe for signup](https://media.giphy.com/media/1zuZFCk02ZKB8wSpT7/giphy.gif?cid=790b7611e82da4979c5cd29eb11fa5c8f908ee6599062997&rid=giphy.gif&ct=g)
#### Send a Message
![Send a Message](https://media.giphy.com/media/c0vr97Ecp4UXh0LqPe/giphy.gif?cid=790b7611bd5e35a22d750ffa8c460cb1f4fc29c752eab360&rid=giphy.gif&ct=g)
#### Recieve a Message
![Recieve a Message](https://media.giphy.com/media/dxL5vEYQwJnuTJhXqJ/giphy.gif?cid=790b7611278875fd75a4326387fe09ad7ac876b0a0b7f392&rid=giphy.gif&ct=g)
#### Delete Message
![Delete Message](https://media.giphy.com/media/5rxDHSttTTeqAI7vQk/giphy.gif?cid=790b76116897000b998486cee83e81bdced9697df41d613c&rid=giphy.gif&ct=g)

## Authors
* Sergio Herrera
