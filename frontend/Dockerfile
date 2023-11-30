FROM node:alpine
WORKDIR /frontend
# COPY package.json ./
COPY . .
RUN npm install
CMD ["npm", "run", "dev"]