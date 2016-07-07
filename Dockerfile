FROM node:6.3

WORKDIR /app

VOLUME /app

EXPOSE 3000

ENTRYPOINT ["npm", "start"]