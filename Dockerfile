# Install dependencies needed for both dev & production build
FROM node:current-alpine

WORKDIR /usr/src/app

COPY package*.json ./

# Run Clean Install instead of Install to get an exact extract of
# package-lock.json
RUN npm install

COPY . .

EXPOSE 8089

CMD ["npm", "run", "dev"]