FROM node:12.16.3-alpine3.9

RUN mkdir -p /var/www/weather-web
WORKDIR /var/www/weather-web

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 1106

ENV NUXT_HOST=0.0.0.0

ENV NUXT_PORT=1106

CMD [ "npm", "server" ]