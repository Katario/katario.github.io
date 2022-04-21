# base image
FROM node:lts-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json

# install and cache app dependencies
RUN npm install

RUN chown -R node.node /app

COPY . .

# start app
CMD ["npm", "run", "dev"]