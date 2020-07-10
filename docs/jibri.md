---
id: jibri
title: Configuration of Jibri For Recording
---

NB: **This section assumes we have logged into our recorder's server via ssh**

We also need to configure Jitsi in order for it to find & allow Jibri to record conferences

We do the following:

### Edit The Jibri Config File

NB: **_We edit the file with our favourite editor, in this tutorial we use Vim_**

```bash
vim /etc/jitsi/jibri/config.json
```

We modify the file as follows;

```json
{
  // NOTE: this is a *SAMPLE* config file, it will need to be configured with
  // values from your environment

  // Where recording files should be temporarily stored
  "recording_directory": "/home/recordings",
  // The path to the script which will be run on completed recordings
  "finalize_recording_script_path": "/home/finalize_recording.sh",
  "xmpp_environments": [
    {
      // A friendly name for this environment which can be used
      //  for logging, stats, etc.
      "name": "prod environment",
      // The hosts of the XMPP servers to connect to as part of
      //  this environment
      "xmpp_server_hosts": ["jitsimeet.easyjitsi.com"],
      // The xmpp domain we'll connect to on the XMPP server
      "xmpp_domain": "jitsi.easyjitsi.com",
      // Jibri will login to the xmpp server as a privileged user
      "control_login": {
        // The domain to use for logging in
        "domain": "auth.jitsimeet.easyjitsi.com",
        // The credentials for logging in
        "username": "jibri",
        "password": "jibriauthpass"
      },
      // Using the control_login information above, Jibri will join
      //  a control muc as a means of announcing its availability
      //  to provide services for a given environment
      "control_muc": {
        "domain": "internal.auth.jitsimeet.easyjitsi.com",
        "room_name": "JibriBrewery",
        // Nickname for uniquely identifing the jibri. It should be unique always
        // if multiple jibris listening to same XMPP server
        "nickname": "jibri-nickname-instance"
      },
      // All participants in a call join a muc so they can exchange
      //  information.  Jibri can be instructed to join a special muc
      //  with credentials to give it special abilities (e.g. not being
      //  displayed to other users like a normal participant)
      "call_login": {
        "domain": "recorder.easyjitsi.com",
        "username": "recorder",
        "password": "jibrirecorderpass"
      },
      // When jibri gets a request to start a service for a room, the room
      //  jid will look like:
      //  roomName@optional.prefixes.subdomain.xmpp_domain
      // We'll build the url for the call by transforming that into:
      //  https://xmpp_domain/subdomain/roomName
      // So if there are any prefixes in the jid (like jitsi meet, which
      //  has its participants join a muc at conference.xmpp_domain) then
      //  list that prefix here so it can be stripped out to generate
      //  the call url correctly
      "room_jid_domain_string_to_strip_from_start": "conference.",
      // The amount of time, in minutes, a service is allowed to continue.
      //  Once a service has been running for this long, it will be
      //  stopped (cleanly).  A value of 0 means an indefinite amount
      //  of time is allowed
      "usage_timeout": "0"
    }
  ]
}
```

## Description of Fields

- xmpp_server_hosts: The domain where stats and logs are stored etc. Eg. jitsi.easyjitsi.com
- xmpp_domain: The domain of the Xmpp server(Prosody) being connecting to. Eg. jitsi.easyjitsi.com
- control_login: Specifies credentials and authorization details Jibri will use to log into the Xmpp Server(Prosody)

- domain: The domain used for logging in.
- username: Username used for logging in.
- password: Password used for logging in.

- control_muc: Specifies the details about the Control Muc being joined on the Xmpp server as a means of annoucing its availability so it can record.
- domain: The Control Muc domain.
- room_name: The Name of the Muc room.
- nickname: Nick name for identification in the Muc Room. This should be unique if we want to setup multiple jibris listening to same XMPP server.
- call_login: This is displayed to other users as a normal participant of a conference

- domain: The domain of the jibri server
- username: Username displayed to the users
- password: Password for authorization
- room_jid_domain_string_to_strip_from_start: Prefix of the url which should be stripped to form a call url correctly. Eg. conference.

## Other Option

To save time and money on recording infrastructure you can use this service: [**jibrisondemand.com**](https://jibrisondemand.com)

They offer services such as :

- Setting time limit for a recorder to save costs
- Fully configured VPS's with jibri
- Monitoring of your jibri servers
- Etc.

**_If you encounted any errors or you found it difficult while following these steps, you can head [here](https://docs.easyjitsi.com/docs/help) to seek help from us._**
