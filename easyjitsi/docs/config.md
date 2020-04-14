---
id:config 
title: Configuration of Jitsi
sidebar_label: Configuration of Jitsi
---

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-163579416-2"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-163579416-2');
</script>

We also need to configure Jitsi in order for it to find & allow Jibri to record conferences

We do the following:

### Edit The Jibri Config File

NB: **_We edit the file with our favourite editor, in this tutorial we use Vim_**

```bash
vim /etc/jitsi/jibri/config.json
```

Once we open the file we see the following:

- xmpp_server_hosts:The domain where stats and logs are stored etc. Eg. jitsi.ddctalent.com
- xmpp_domain=The domain of the Xmpp server(Prosody) being connecting to. Eg. jitsi.ddctalent.com
- control_login=Specifies credentials and authorization details Jibri will use to log into the Xmpp Server(Prosody)

  - domain=The domain used for logging in.
  - username=Username used for logging in.
  - password=Password used for logging in.

- control_muc:Specifies the details about the Control Muc being joined on the Xmpp server as a means of annoucing its availability so it can record.
  - domain=The Control Muc domain.
  - room_name=The Name of the Muc room.
  - nickname=Nick name for identification in the Muc Room
- call_login=This is displayed to other users as a normal participant of a conference
  - domain=the domain of the jibri server
  - username=username displayed to the users
  - password=password for authorization
  - room_jid_domain_string_to_strip_from_start:prefix of the url which should be stripped to form a call url correctly. Eg. conference.

### Configure Prosody To Register Jibri Users

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

**_If you encounted any errors or you found it difficult while following these steps, you can head [here](https://docs.easyjitsi.com/docs/help) to seek help from us._**
