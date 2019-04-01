var expressExtension = require('express-integrator-extension');
var functions = require('./functions');

var systemToken = '20eaaa8bb8004a29bc94ebb335ceee72'; // Set this value to the systemToken of the stack created in integrator.io
var options = {
    diy: functions,
    // connectors: { _connectorId: functions }, // for connectors
    systemToken: systemToken,
    port: 7000
};

expressExtension.createServer(options, function (err) {

});