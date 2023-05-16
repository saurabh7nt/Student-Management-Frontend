# FROM node:alpine

# WORKDIR /app

# COPY package*.json /app

# RUN npm install

# COPY . .

# EXPOSE 3000

# CMD [ "npm", "start" ]

#_____________________________________________________________


FROM node:12-alpine

WORKDIR /app

# Create a new directory for the npm cache
RUN mkdir /app/.npm-cache

# Set the npm cache directory to the new directory
ENV npm_config_cache=/app/.npm-cache

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
