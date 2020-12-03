## Node basic async / await example

The code get data from https://dog.ceo/dog-api/ which is an API web example.
Then, parse the JSON data and insert an image URL into a text file for every breed of dogs inside the response.

You can create a run a docker container with build and run command.

`docker build -t node-example .`

An then run the container.

`docker run -p 5000:5000 <image id>`

Or simple pull the code an install the dependencies.

`npm init`
