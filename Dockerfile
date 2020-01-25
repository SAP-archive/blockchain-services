FROM node:12-alpine
RUN apk update && apk upgrade && apk add --no-cache bash git openssh python
COPY package.json .
RUN npm install
RUN npm install -g truffle
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "serve:docker"]
