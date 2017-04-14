var pkg = require('./package.json');
var qrcode = '';


// open in safari
var safariSim = {scheme: "http://127.0.0.1:8001"};
module.exports.simOpts = Object.assign({ qrcode: qrcode}, safariSim);
