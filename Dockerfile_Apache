# ---------- Stage 1: Build ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Copy project files
COPY . .

RUN npm install
RUN npm run build

# ---------- Stage 2: Serve ----------
FROM httpd:alpine

# Enable mod_rewrite for SPA routing
RUN apk add --no-cache apache2-utils bash \
    && sed -i '/LoadModule rewrite_module/s/^#//g' /usr/local/apache2/conf/httpd.conf

# Copy the build files
COPY --from=builder /app/dist/ /usr/local/apache2/htdocs/

# Copy custom Apache config
COPY apache.conf /usr/local/apache2/conf/httpd.conf

EXPOSE 80

CMD ["httpd", "-D", "FOREGROUND"]


