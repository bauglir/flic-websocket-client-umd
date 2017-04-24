# Flic WebSocket Client (UMD Version)

This package provides a UMD wrapper around the `fliclib.js` WebSocket client
provided by [Shortcut Labs](https://shortcutlabs.com) in their
[fliclib-linux-hci package](https://github.com/50ButtonsEach/fliclib-linux-hci).

It's main purpose is to make it easier to integrate this client into
browser-based applications using tools such as Webpack. A vendored version of
the client (which [is released under
CC0](https://raw.githubusercontent.com/50ButtonsEach/fliclib-linux-hci/master/COPYING%20(for%20the%20documentation%20and%20source%20code).txt)),
is included in this package. However, the server component still needs to be
obtained (and managed separately) from
https://github.com/50ButtonsEach/fliclib-linux-hci.

The currently included client was vendored from
50ButtonsEach/fliclib-linux-hci@4971a641adc62918a4ec8901b1d1e06160de8a1d.
