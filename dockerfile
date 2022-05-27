FROM node:14-alpine

WORKDIR /app/test

COPY package*.json ./

RUN npm install

EXPOSE 3000

COPY . ./

CMD [ "npm", "test"]