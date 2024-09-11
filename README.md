## Installation

You need to be running at least Node.js 10 to use this library.

```
$ npm install pusher
```

## Importing

It's possible to use pusher-http-node with typescript or javascript.

```javascript
const Pusher = require("pusher");
```

```typescript
import * as Pusher from "pusher";
```

All external APIs should have types in index.d.ts.

## Configuration

There are 3 ways to configure the client. First one is just using the Pusher constructor:

```javascript
const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "APP_ID",
  key: "APP_KEY",
  secret: "SECRET_KEY",
  useTLS: USE_TLS, // optional, defaults to false
  cluster: "CLUSTER", // if `host` is present, it will override the `cluster` option.
  host: "HOST", // optional, defaults to api.pusherapp.com
  port: PORT, // optional, defaults to 80 for non-TLS connections and 443 for TLS connections
  encryptionMasterKeyBase64: ENCRYPTION_MASTER_KEY, // a base64 string which encodes 32 bytes, used to derive the per-channel encryption keys (see below!)
});
```
