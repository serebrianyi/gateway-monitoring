// Bootstrap node.js
require('./lib/goog/bootstrap/nodejs');

// Our app compiled by cljsbuild
require('./server.js');

// The core of our code
require('./lib/gateway_monitoring/server/core');

// The core of cljs
require('./lib/cljs/core');

// Run main
// NOTE: Dashes in namespaces are replaced by underscores.
gateway_monitoring.server.core._main();