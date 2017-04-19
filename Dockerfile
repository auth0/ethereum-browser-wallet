FROM node:wheezy
COPY package.json package.json
RUN npm install
COPY app.js app.js
COPY web web
EXPOSE 3002
ENTRYPOINT ["node","app.js"]
