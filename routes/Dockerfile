FROM php:8.3-cli

RUN apt-get update && apt-get install -y 
git 
curl 
unzip 
zip 
libzip-dev 
nodejs 
npm

RUN docker-php-ext-install zip

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /app

COPY . .

RUN composer install --no-dev --optimize-autoloader

RUN npm install

RUN npm run build

RUN php artisan config:cache || true
RUN php artisan route:cache || true
RUN php artisan view:cache || true

EXPOSE 10000

CMD php artisan serve --host=0.0.0.0 --port=${PORT:-10000}
