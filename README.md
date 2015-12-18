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
