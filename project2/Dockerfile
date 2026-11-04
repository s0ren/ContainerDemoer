# Stage 1: Build
FROM node:24-alpine as builder
WORKDIR /app
# Hvis indholdet er opretet og er i `./app`
# COPY ./app/. .
# Ellers sæt # foran linjen ovenfor 
# og fjern # foran linjen nedenunder
RUN npm create vite@latest --yes . -- --template react --host --no-interactive
RUN npm install 
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
