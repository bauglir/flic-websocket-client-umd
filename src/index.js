const {
  FlicClient, FlicCommandOpcodes, FlicConnectionChannel, FlicEventOpcodes,
  FlicRawWebsocketClient, FlicScanWizard, FlicScanner,
} = require(
  `exports-loader?FlicClient&FlicCommandOpcodes&FlicConnectionChannel&FlicEventOpcodes&FlicRawWebsocketClient&FlicScanWizard&FlicScanner!../vendor/fliclib.js`
);

export {
  FlicClient, FlicCommandOpcodes, FlicConnectionChannel, FlicEventOpcodes,
  FlicRawWebsocketClient, FlicScanWizard, FlicScanner,
};
