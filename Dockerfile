# Stage 1: Build the React app
FROM node:18-alpine as builder

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:stable-alpine

# Set working directory
WORKDIR /nguyen_sunrise_final_site

COPY --from=builder /app/dist /nguyen_sunrise_final_site

EXPOSE 5575

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
