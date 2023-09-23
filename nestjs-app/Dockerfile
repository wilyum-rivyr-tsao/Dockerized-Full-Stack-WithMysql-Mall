FROM node:18-alpine

WORKDIR /app
COPY package*.json .
RUN npm cache clean --force && rm -rf node_modules && npm install
COPY . .
CMD [ "npm run start:dev:docker" ]