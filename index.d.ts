// Type definitions for flic-websocket-client-umd
// Project: flic-websocket-client-umd
// Definitions by: Joris Kraak <https://github.com/bauglir>

export declare class FlicClient {
  addConnectionChannel(connection_channel: FlicConnectionChannel): void;
  addScanWizard(flic_scan_wizard: FlicScanWizard): void;
  addScanner(flic_scanner: FlicScanner): void;
  cancelScanWizard(flic_scan_wizard: FlicScanWizard): void;
  getButtonUUID(bd_address: string, callback: GetButtonUuidCallback): void;
  getInfo(callback: GetInfoCallback): void;
  onBluetoothControllerStateChange(state: string): void;
  removeConnectionChannel(connection_channel: FlicConnectionChannel): void;
  removeScanner(flic_scanner: FlicScanner): void;
  onClose(): void;
  onGotSpaceForNewconnection(max_concurrently_connected_buttons: number): void;
  onNewVerifiedButton(bd_address: string): void;
  onNoSpaceForNewConnection(max_concurrently_connected_buttons: number): void;
  onReady(): void;

  constructor(ws_address: string);
}

export declare class FlicConnectionChannel {
  autoDisconnectTime: number;
  latencyMode: string;

  constructor(bd_address: string, options: FlicConnectionChannelOptions);
}

export declare class FlicRawWebsocketClient {
  // The event argument has a large number of fields it may take. As these are
  // mostly internal to the library, they're considered out of scope for these
  // definition files
  onEvent(opcode: number, event: object): void;
  onWsClose(event: Event): void;
  onWsMessage(event: Event): void;
  onWsOpen(event: Event): void;
  sendCommand(opcode: number, obj: object): void;

  constructor(ws_address: string);
}

export declare class FlicScanWizard {
  constructor(options: FlicScanWizardOptions);
}

export declare class FlicScanner {
  constructor(options: FlicScannerOptions);
}

export declare const FlicCommandOpcodes: StringEnum;
export declare const FlicEventOpcodes: StringEnum;

interface FlicButtonEventCallback {
  (click_type: string, was_queued: boolean, time_diff: number): void;
}

interface FlicConnectionChannelOptions {
  autoDisconnectTime?: number;
  latencyMode?: string;

  onConnectionStatusChanged?(connection_status: string, disconnect_reason: string): void;
  onCreateResponse?(error: string, connection_status: string): void;
  onRemoved?(removed_reason: string): void;

  onButtonClickOrHold?: FlicButtonEventCallback;
  onButtonSingleOrDoubleClick?: FlicButtonEventCallback;
  onButtonSingleOrDoubleClickOrHold?: FlicButtonEventCallback;
  onButtonUpOrDown?: FlicButtonEventCallback;
}

interface FlicScanWizardOptions {
  onButtonConnected?(bd_address: string, name: string): void;
  onCompleted?(result: string, bd_address: string, name: string): void;
  onFoundPrivateButton?(): void;
  onFoundPublicButton?(bd_address: string, name: string): void;
}

interface FlicScannerOptions {
  onAdvertisementPacket(
    bd_address: string, name: string, rssi: number, is_private: boolean,
    already_verified: boolean
  ): void;
}

interface GetButtonUuidCallback {
  (bd_address: string, uuid: string): void
}

interface GetInfoCallback {
  (info: GetInfoEvent): void
}

interface GetInfoEvent {
	bdAddrOfVerifiedButtons: number[];
	currentPendingConnections: number;
	currentlyNoSpaceForNewConnection: boolean;
	maxConcurrentlyConnectedButtons: number;
	maxPendingConnections: number;
	myBdAddrType: string;
  bluetoothControllerState: string;
  myBdAddr: string;
}

interface StringEnum {
  [ index: string ]: number;
}
