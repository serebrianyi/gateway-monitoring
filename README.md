# About
Monitoring software for gateways running [TTN Packet forwarder](https://github.com/TheThingsNetwork/packet_forwarder) as a [service](https://github.com/gonzalocasas/ic880a-gateway).
It parses the log file and extracts from there some useful information like gateway id, for how long is the gateway running, versions of software used etc.
The idea would be to extend it to support live packet traffic.

# How to build
* Install [node](https://nodejs.org/en/) and [lein](https://github.com/technomancy/leiningen)
* Run ```npm install``` to get all JS dependencies
* Run ```lein cljsbuild once client-prod``` to build the client
* Run ```lein cljsbuild once server``` to build the server
* Run ```node server\app.js``` to run the web-server on port 3000

# How to run the docker
Just deploy the container (```docker-compose up```) and go to port 49162

# How to run on raspberry pi
* Precondition: The monitoring software is built on your "normal" pc as described in "How to build". If you don't want to do that, just take the content of the relase folder with precompiled software
* We require node v0.12, but by default Raspbian Jessie is running v0.10. How to upgrade is described [here](http://conoroneill.net/download-compiled-version-of-nodejs-0120-stable-for-raspberry-pi-here/)
* Create "gateway-monitoring" folder on raspberry pi
* Copy the "resources" folder, the "server" folder and the "package.json" file into it
* Run ```npm install``` to get all JS dependencies
* Run ```node server\app.js``` to run the web-server on port 3000, but make sure to use node v0.12
