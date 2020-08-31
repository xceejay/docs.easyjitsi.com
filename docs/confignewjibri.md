---
id: confignewjibri
title: Configuration of Latest Release of Jibri For Recording And Live Streaming
---

NB: **This section assumes we have logged into our jibri server via ssh**

We also need to configure Jitsi in order for it to find & allow Jibri to record conferences

We do the following:

### Edit The Jibri Config File

NB: **_We edit the file with our favourite editor, in this tutorial we use Vim_**

```bash
vim /etc/jitsi/jibri/jibri.conf
```

We modify the file as follows;

```hocon
// An example file showing the fields for the XMPP environment config.
{
    environments = [
        {
            // A user-friendly name for this environment
            name = "prod environment"

            // A list of XMPP server hosts to which we'll connect
            xmpp-server-hosts = [ "meet.easyjitsi.com" ]

            // The base XMPP domain
            xmpp-domain = "meet.easyjitsi.com"

            // The MUC we'll join to announce our presence for
            // recording and streaming services
            control-muc {
                domain = "internal.auth.jitsimeet.easyjitsi.com"
                room-name = "JibriBrewery"
                nickname = "jibrinickname"
            }

            // The login information for the control MUC
            control-login {
                domain = "meet.easyjitsi.com"
                username = "jibri"
                password = "jibriauthpass"
            }

            // An (optional) MUC configuration where we'll
            // join to announce SIP gateway services
            sip-control-muc {
                domain = "internal.auth.jitsimeet.easyjitsi.com"
                room-name = "JibriBrewery"
                nickname = "jibrinickname"
            }

            // The login information the selenium web client will use
            call-login {
                domain = "meet.easyjitsi.com"
                username = "recorder"
                password = "recorderauthpass"
            }

            // The value we'll strip from the room JID domain to derive
            // the call URL
            strip-from-room-domain = ""

            // How long Jibri sessions will be allowed to last before
            // they are stopped.  A value of 0 allows them to go on
            // indefinitely
            usage-timeout = 1 hour

            // Whether or not we'll automatically trust any cert on
            // this XMPP domain
            trust-all-xmpp-certs = true
        }
    ]
}

```

**_If you encounted any errors or you found it difficult while following these steps, you can head [here](https://docs.easyjitsi.com/docs/help) to seek help from us._**
