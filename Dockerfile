FROM php:8.3-cli

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libzip-dev \
    zip

# Install PHP extensions
RUN docker-php-ext-install zip

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /app

COPY . .

RUN composer install --no-dev --optimize-autoloader

RUN cp .env.example .env || true

RUN php artisan key:generate --force || true

EXPOSE 10000

CMD php artisan serve --host=0.0.0.0 --port=10000