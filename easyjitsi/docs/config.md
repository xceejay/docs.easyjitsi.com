---
id: config
title: Configuration of Jitsi For Recording
---

We also need to configure Jitsi in order for it to find & allow Jibri to record conferences

We do the following:

### Edit The Jibri Config File

NB: **_We edit the file with our favourite editor, in this tutorial we use Vim_**

## Configure Prosody To Register Jibri Users

```bash
   vim /etc/prosody/prosody.cfg.lua
```

We then insert the following into the file we just opened

```
-- internal muc component, meant to enable pools of jibri and jigasi clients
  Component "internal.auth.easyjitsi.com" "muc"
      modules_enabled = {
        "ping";
      }
      storage = "null"
      muc_room_cache_size = 1000
  VirtualHost "recorder.easyjitsi.com" # replace this domain with the call_login domain
    modules_enabled = {
      "ping";
    }
    authentication = "internal_plain"
```

```bash
## Replace The these below with your call_login and control_login credentials

prosodyctl register jibri auth.yourdomain.com jibriauthpass
prosodyctl register recorder recorder.yourdomain.com jibrirecorderpass
```

11. Set The Appropriate Muc To Look For Available Jibri Recorders

```bash
## Edit This File
/etc/jitsi/jicofo/sip-communicator.properties

## Paste This Within That File
org.jitsi.jicofo.jibri.BREWERY=JibriBrewery@internal.auth.yourdomain.com
org.jitsi.jicofo.jibri.PENDING_TIMEOUT=90

```

Configure Jitsi So it Shows Record Buttons

```bash

## Edit This file

/etc/jitsi/meet/yourdomain-config.js ## replace yourdomain with your jitsi domain

## Look for these Parameters and set them to be true

fileRecordingsEnabled: true, ##If you want to enable file recording
liveStreamingEnabled: true, ## If you want to enable live streaming
hiddenDomain: 'recorder.yourdomain.com', ## hiddendomain used to connect

```

**_If you encounted any errors or you found it difficult while following these steps, you can head [here](https://docs.easyjitsi.com/docs/help) to seek help from us._**
