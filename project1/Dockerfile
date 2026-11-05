# Simple sample with Nginx

# FROM nginx:alpine
# COPY . /usr/share/nginx/html
# EXPOSE 80

# Also simple with node
FROM node:alpine
RUN npm install -g http-server
WORKDIR /app
COPY . /app
EXPOSE 8080
CMD ["http-server", ".", "-p", "8080", "-c-1"]