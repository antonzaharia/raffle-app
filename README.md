# README


# RAFFLE-APP
Welcome !

This is a web app created in using Ruby on Rails as backend and React as frontend.

# Overview

Demo video: 
https://www.youtube.com/watch?v=ywZg1YtcpIo&ab_channel=AntonZaharia

Blog post: 
https://antonzaharia.github.io/final_project_-_react_redux_and_rails

This is a web app that provides a number of contests where any user can participate.
Any user can "purchase" a limit of 30 tickets per post.
After a user buys a ticket will need to wait until the admin makes the raffle and gives the post a winning number.

# Installation
Clone this repository

cd to: /raffle-backend 
In your terminal, run 'bundle install' to install all required gems.
In your terminal, type 'rake db:seed' to fill up the database with 3 raffles, an admin account and 2 users.

cd to: /raffle-frontend
In your terminal, run 'npm install' to install all required npm packages.

# How to run the program
cd to: /raffle-backend 
In your terminal, type 'rails server -p 3001' to start the server.
cd to: /raffle-frontend
In your terminal, run 'npm start' to start the npm server.
Visit 'http://localhost:3000' to see the homepage.

Files information
### '/raffle-backend/db/migrate' has all the migrations files
### '/raffle-backend/config' has the setup environment
### '/raffle-backend/app' has the ruby api app
### '/raffle-backend/app/controllers' has the controllers files
### '/raffle-backend/app/models' has the ruby models
### '/raffle-backend/Gemfile' has all the required gems to run this project


### '/raffle-frontend' has the react app
### '/raffle-frontend/actions' has the Redux action functions files
### '/raffle-frontend/components' has the the parts of the components
### '/raffle-frontend/containers' has the containers of the app
### '/raffle-frontend/helpers' has the helpers functions
### '/raffle-frontend/reducers' has the Redux reducers files


# Usage
After installation visit the Homepage.
Accounts:
### Admin {email: "admin@admin.com", password: "admin"}
### User {email: "test@test.com", password: "test"}
### User {email: "zaharia@example.com", password: "zaharia"}

If 'rake db:seed' was used you can login using one the provided accounts or you can sign up.

On the main page, if any of the posts have the raffle date today will show in a big slider. Also all the posts will be showed in the bottom of the page.
### |
Check each post and decide in which one you want to join. 
Answer the question, select how many tickets and press ADD to Cart. Then you will be redirected to the cart page.
Now you can either change the quantity of the tickets or checkout.
### |
After checking out you can view the account page that can be accessed by pressing on the name of the user.
Account page can be used to check the status of a raffle
### |
Admin interface can be used to add a new post, edit an existing post of deleting a post.
Raffle will be done by pressing the "Raffle" button form the admin interface.

# Development
After checking out the repo, run bundle install in the /raffle-backend directory to install dependencies.
After checking out the repo, run npm in the /raffle-frontend directory to install dependencies.

Contributing
Bug reports and pull requests are welcome on GitHub at https://github.com/antonzaharia/raffle-app. This project is intended to be a safe, welcoming space for collaboration.

# License
The gem is available as open source under the terms of the MIT License.

# Code of Conduct
Everyone interacting in the Raffle-App project's codebases, issue trackers, chat rooms and mailing lists is expected to follow the code of conduct.
