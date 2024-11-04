FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . .
WORKDIR /app/TECHWAVE/
EXPOSE 3000
ENV REACT_APP_API_URL = "http://localhost:8100"
CMD [ "npm", "start" ]
