###################
# BUILD FOR LOCAL DEVELOPMENT
###################

# FROM node:18-alpine As development

# WORKDIR /client

# COPY --chown=node:node package*.json ./

# RUN npm ci

# RUN npm install -g http-server

# COPY --chown=node:node . .

# USER node

# ###################
# # BUILD FOR PRODUCTION
# ###################

# FROM node:18-alpine As build

# WORKDIR /client

# COPY --chown=node:node package*.json ./

# COPY --chown=node:node --from=development /client/node_modules ./node_modules

# COPY --chown=node:node . .

# RUN npm run build

# ENV NODE_ENV production

# RUN npm ci --only=production && npm cache clean --force

# RUN npm install -g http-server

# USER node

# ###################
# # PRODUCTION
# ###################

# FROM node:18-alpine As production

# COPY --chown=node:node --from=build /client/node_modules ./node_modules

# COPY --chown=node:node --from=build /client/dist ./dist

# EXPOSE 8081

# CMD [ "node", "dist" ]

FROM node:lts-alpine as build-stage
WORKDIR /client
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /client/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]