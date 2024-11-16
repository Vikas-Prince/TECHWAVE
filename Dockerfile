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

RUN npm install -g serve json-server

EXPOSE 3000 8100

CMD ["sh", "-c", "serve -s build -l 3000 & json-server --watch new.json --port 8100"]
