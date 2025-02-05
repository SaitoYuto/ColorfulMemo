FROM node:lts-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=base /app/dist .
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]