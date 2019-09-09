FROM node:8.0-slim
CMD [ "npm", "run", "-s", "start" ]

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
EXPOSE 80

# Set environment vars
ENV DB_MYSQL_NAME "aroundy"
ENV DB_MYSQL_PORT "3306"
ENV DB_MYSQL_HOST "aroundy"
ENV DB_MYSQL_PASS "aroundy"
ENV DB_MYSQL_USER "aroundy"

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install
RUN npm install -g nodemon
RUN npm install bunyan
RUN npm install express
RUN npm install -g express

# Bundle app source
COPY . /usr/src/app
