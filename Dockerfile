# This base image has much more than we need but anyway...
FROM rasheedamir/java-nodejs-web-app

# Install leiningen
RUN curl https://raw.githubusercontent.com/technomancy/leiningen/stable/bin/lein > /usr/bin/lein
RUN chmod 755 /usr/bin/lein
# Tell lein that running as root is okay.
ENV LEIN_ROOT=1
# Actually install leiningen.
RUN lein --version

RUN mkdir /app
WORKDIR /app

# Prefetch and cache dependencies
COPY /package.json package.json
COPY /project.clj project.clj
RUN npm install
RUN lein cljsbuild once client-prod

# Build the app
COPY resources resources
COPY server server
COPY src src

RUN lein clean
RUN lein cljsbuild once client-prod
RUN lein cljsbuild once server

EXPOSE 3000
CMD ["node", "server/app.js"]