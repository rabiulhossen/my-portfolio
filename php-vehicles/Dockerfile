# Use official PHP image with Apache
FROM php:8.2-apache

# Enable Apache mod_rewrite
RUN a2enmod rewrite

# Set the document root
ENV APACHE_DOCUMENT_ROOT /var/www/html

# Copy application files
COPY . /var/www/html/

# Set proper permissions
RUN chown -R www-data:www-data /var/www/html

# Expose port 80
EXPOSE 80

# Start Apache
CMD ["apache2-foreground"]
