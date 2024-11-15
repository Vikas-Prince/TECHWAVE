# Stage 1: Build the application
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

RUN npm run build


# Stage 2: Prepare the production-ready container
FROM node:18-slim AS production

WORKDIR /app

COPY --from=build /app/package*.json ./

RUN npm install --production

COPY --from=build /app/build ./build

EXPOSE 3000

CMD ["npm", "start"]
