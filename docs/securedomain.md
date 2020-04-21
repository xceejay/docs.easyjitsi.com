---
id: securedomain
title: Secure Domain
---

It is possible to allow only authenticated users for creating new conference
rooms. Whenever new room is about to be created Jitsi Meet will prompt for
user name and password. After room is created others will be able to join
from anonymous domain. Here's what has to be configured:

1 In Prosody:

(If you have installed jitsi-meet from the Debian package, these changes should be made in /etc/prosody/conf.avail/jitsimeet.easyjitsi.cfg.lua)

a) Enable authentication on your main domain:<br/>

```
VirtualHost "jitsimeet.easyjitsi.com"
    authentication = "internal_plain"
```

b) Add new virtual host with anonymous login method for guests:<br/>

```
VirtualHost "guest.jitsimeet.easyjitsi.com"
    authentication = "anonymous"
    c2s_require_encryption = false
```

(Note that guest.jitsimeet.easyjitsi.com is internal to jitsi, and you do not need to (and should not) create a DNS record for it, or generate an SSL/TLS certificate, or do any web server configuration.)

2 In Jitsi Meet config.js configure 'anonymousdomain':<br/>

(If you have installed jitsi-meet from the Debian package, these changes should be made in /etc/jitsi/meet/jitsimeet.easyjitsi.com-config.js)

```
var config = {
    hosts: {
            domain: 'jitsimeet.easyjitsi.com',
            anonymousdomain: 'guest.jitsimeet.easyjitsi.com',
            ...
        },
        ...
}
```

3 When running Jicofo specify your main domain in additional configuration
property. Jicofo will accept conference allocation requests only from
authenticated domain.

```
-Dorg.jitsi.jicofo.auth.URL=XMPP:jitsimeet.easyjitsi.com
```

If you have Jicofo installed from the Debian package this should go directly on a new line in
the **/etc/jitsi/jicofo/sip-communicator.properties** file:

```
org.jitsi.jicofo.auth.URL=XMPP:jitsimeet.easyjitsi.com
```

4 To create users use the command:

```
prosodyctl register <username> jitsimeet.easyjitsi.com <password>
```

5 If you are using jigasi:

a) Set jigasi to authenticate by editing the following lines in sip-communicator.properties.

If you have jigasi installed from the Debian package this should go directly to
**/etc/jitsi/jigasi/sip-communicator.properties**

org.jitsi.jigasi.xmpp.acc.USER_ID=SOME_USER@SOME_DOMAIN
org.jitsi.jigasi.xmpp.acc.PASS=SOME_PASS
org.jitsi.jigasi.xmpp.acc.ANONYMOUS_AUTH=false

The password is the actual plaintext password, not a base64 encoding.

b) If you experience problems with a certificate chain, you may also need to uncomment the following line, also in sip-communicator.properties:

net.java.sip.communicator.service.gui.ALWAYS_TRUST_MODE_ENABLED=true

Note that this should only be used for testing/debugging purposes, or in controlled environments. If you confirm that this is the problem, you should then solve it in another way (e.g. get a signed certificate for prosody, or add the particular certificate to jigasi’s trust store).

## Certificates

Jicofo uses an XMPP user connection (on port 5222 by default), and since the
upgrade to smack4 it verifies the server's certificate. In a default
installation the debian installation scripts take care of generating a
self-signed certificate and adding it to the keystore.

For situations in which the certificate is not trusted you can add it to the
store by:

### On Linux

```
sudo cp cert.pem /usr/local/share/ca-certificates/
sudo update-ca-certificates
```

### On MacOS X

On Mac java uses its own keystore, so adding the certificate to the system one
does not work. Add it to the java keystore with:

```
sudo keytool -importcert -file cert.pem -keystore /Library/Java//JavaVirtualMachines/jdk1.8.0_25.jdk/Contents/Home/jre/lib/security/cacerts
```

Note that if the XMPP server you are connecting to is a prosody instance
configured with the jitsi-meet scripts, then you can find the certificate in:

```
/var/lib/prosody/$JICOFO_AUTH_DOMAIN.crt
```
