FROM node:18-alpine

# Create app directory
WORKDIR /app

COPY package*.json ./
RUN npm i

COPY . .

CMD ["npm", "run", "dev"]