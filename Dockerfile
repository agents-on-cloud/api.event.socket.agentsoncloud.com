FROM node:16.19.1-alpine3.16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install
# Bundle app source
COPY . .

EXPOSE 50252
CMD [ "node", "./bin/www" ]
