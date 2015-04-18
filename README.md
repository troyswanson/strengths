# Strengths

[![Build Status](https://travis-ci.org/troyswanson/strengths.svg)](https://travis-ci.org/troyswanson/strengths)
[![Code Climate](https://codeclimate.com/github/troyswanson/strengths/badges/gpa.svg)](https://codeclimate.com/github/troyswanson/strengths)

Tiny app to find the descriptions of your strengths

## Getting started

Unfortunately, most people will not be able to get this working on their own machine, since it requires connection to the database that host the strengths. If you have the connect string, though, getting started is pretty easy:

1. Clone this repo. `git clone https://github.com/troyswanson/strengths.git`
2. Install Node dependencies. `npm install`
3. Create a `.env` file in the root folder of the project.
3. Add `MONGODB_CONNECT_STRING=[the_connect_string]` to the `.env` file.
4. Start the server with Foreman. `foreman run node index.js`
