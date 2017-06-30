FROM node:7.7-alpine

RUN mkdir app/

COPY . app/

COPY package.json app/

RUN npm install


WORKDIR app/

EXPOSE 3000

CMD ["npm", "start"]
