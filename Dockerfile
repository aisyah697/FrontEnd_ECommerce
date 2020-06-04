FROM nginx:stable
MAINTAINER Your Name "putriaisyah697@gmail.com"

RUN mkdir -p /test/www/FrontEnd_ECommerce
RUN mkdir -p /test/log

COPY default.conf /etc/nginx/conf.d/

ADD build/. /test/www/FrontEnd_ECommerce

WORKDIR /test/www/FrontEnd_ECommerce
