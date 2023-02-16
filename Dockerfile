FROM node:18.14.0
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
EXPOSE 3030
CMD ["npm", "run", "dev"]