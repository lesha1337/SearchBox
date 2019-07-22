FROM node:12.6.0

RUN npm i -g nodemon
RUN mkdir /server
ADD . /server
WORKDIR /server
EXPOSE 5500

CMD ["sh", "run_dev.sh"]