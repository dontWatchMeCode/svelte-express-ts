FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

# install production packes
# ignore postinstall (vite packages)
RUN npm ci --only=production --ignore-scripts

# copy files (withought source)
ADD .env /usr/src/app
ADD dist /usr/src/app/dist
