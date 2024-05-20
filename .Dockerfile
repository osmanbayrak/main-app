# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any needed packages
RUN npm install

# Bundle app source
COPY . .

# Build the project
RUN npm run build

# Install a simple http server for serving static content
RUN npm install -g serve

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Run serve when the container launches
CMD ["serve", "-s", "build", "-l", "8080"]