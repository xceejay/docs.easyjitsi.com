---
id: config
title: Configuration of Jitsi For Recording
---

NB: **This section assumes we have logged into our Ubuntu server with the FQDN jitsimeet.easyjitsi.com**

We need to configure Jitsi in order for it to find & allow Jibri to record conferences

We do the following:

NB: **_We edit the file with our favourite editor, in this tutorial we use Vim_**

### Configure Prosody To Register Jibri Users

```bash
vim /etc/prosody/prosody.cfg.lua
```

We then insert the following into the file we just opened

```lua
-- internal muc component, meant to enable pools of jibri and jigasi clients
Component "internal.auth.jitsimeet.easyjitsi.com" "muc"
modules_enabled = {
  "ping";
}
storage = "null"
muc_room_cache_size = 1000


VirtualHost "recorder.easyjitsi.com"
modules_enabled = {
  "ping";
}
authentication = "internal_plain"
```

### Set client to server encryption to false

Look for this line in the /etc/prosody/prosody.cfg.lua and set it to false

```lua
c2s_require_encryption = false
```

### Register recorders with prosody

```bash
prosodyctl register jibri auth.jitsimeet.easyjitsi.com jibriauthpass
prosodyctl register recorder recorder.easyjitsi.com jibrirecorderpass
```

### Set The Appropriate Muc To Look For Available Jibri Recorders

We edit the following file

```bash
vim /etc/jitsi/jicofo/sip-communicator.properties
```

We append the following to the file

```bash
org.jitsi.jicofo.jibri.BREWERY=JibriBrewery@internal.auth.jitsimeet.easyjitsi.com
org.jitsi.jicofo.jibri.PENDING_TIMEOUT=90
```

### Configure Jitsi So it Shows Record Buttons

We open this file

```bash
vim /etc/jitsi/meet/jitsimeet.easyjitsi.com-config.js
```

We append the following configuration to the file

```bash
fileRecordingsEnabled: true,
hiddenDomain: 'recorder.easyjitsi.com',
```

**_If you encounted any errors or you found it difficult while following these steps, you can head [here](https://docs.easyjitsi.com/docs/help) to seek help from us._**
