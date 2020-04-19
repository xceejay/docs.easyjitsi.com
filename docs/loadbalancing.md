---
id: loadbalancing
title: Load Balancing Installation
---

## Definitions:

JMS - Your Jeets-Meet Server installed like in the Quick-Install Guide, see above.

JVB - the additional Jitsi Videobridge Server we are going to install now

### Here are the steps to get it to work on a fresh installed Ubuntu 18.04:

> all commands are issued as root user

- be sure to update ubuntu to the latest patches on JVB

```
echo 'deb https://download.jitsi.org stable/' >> /etc/apt/sources.list.d/jitsi-stable.list
wget -qO -  https://download.jitsi.org/jitsi-key.gpg.key | apt-key add -
apt-get install apt-transport-https
apt update
apt upgrade
```

- setup your firewall on the new videobridge-server JVB

```
ufw status
ufw allow ssh
ufw allow 443/tcp
ufw allow 4443/tcp
ufw allow 10000:20000/udp
ufw enable
```

- setup the firewall on the jitsi-meet server where the first instance is running on JMS

```
ufw allow 5222/tcp
ufw reload
```

- install jitsi-videobridge on the new videobridge-server JVB

```
apt -y install jitsi-videobridge2
```

> enter the DNS Name from your jitsi-meet server (JMS) during installation on the JVB

- look into the file `/etc/jitsi/videobridge/config` on JVB; it should like:

```
# Jitsi Videobridge settings

# sets the XMPP domain (default: none)
JVB_HOSTNAME=<your jitsi-meet domain name which you entered during installation>

# sets the hostname of the XMPP server (default: domain if set, localhost otherwise)
JVB_HOST=

# sets the port of the XMPP server (default: 5275)
JVB_PORT=5347

# sets the shared secret used to authenticate to the XMPP server
JVB_SECRET=fg4t55z

# extra options to pass to the JVB daemon
JVB_OPTS="--apis=,"


# adds java system props that are passed to jvb (default are for home and logging config file)
JAVA_SYS_PROPS="-Dnet.java.sip.communicator.SC_HOME_DIR_LOCATION=/etc/jitsi -Dnet.java.sip.communicator.SC_HOME_DIR_NAME=videobridge -Dnet.java.sip.communicator.SC_LOG_DIR_LOCATION=/var/log/jitsi -Djava.util.logging.config.file=/etc/jitsi/videobridge/logging.properties"
```

- copy the values from your jitsi-meet server (JMS) to the JVB Server:
- on JMS open the file `/etc/jitsi/videobridge/sip-communicator.properties`, copy all content to clipboard and paste it on the JVB Server also in the file `/etc/jitsi/videobridge/sip-communicator.properties` replacing all other in it.
- the content on JVB should be like:

```
org.jitsi.videobridge.DISABLE_TCP_HARVESTER=true
org.jitsi.videobridge.ENABLE_STATISTICS=true
org.jitsi.videobridge.STATISTICS_TRANSPORT=muc
org.jitsi.videobridge.xmpp.user.shard.HOSTNAME=<your jitsi-meet Server as DNS like jitsi.example.tld>
org.jitsi.videobridge.xmpp.user.shard.DOMAIN=auth.<your jitsi-meet Server as DNS like jitsi.example.tld>
org.jitsi.videobridge.xmpp.user.shard.USERNAME=jvb
org.jitsi.videobridge.xmpp.user.shard.PASSWORD=<secret from JMS - keep it; do not change it>
org.jitsi.videobridge.xmpp.user.shard.MUC_JIDS=JvbBrewery@internal.auth.<your jitsi-meet Server as DNS like jitsi.example.tld>
org.jitsi.videobridge.xmpp.user.shard.MUC_NICKNAME=<any unique name here; important: unique value for each videobridge like "jvb2">
org.jitsi.videobridge.xmpp.user.shard.DISABLE_CERTIFICATE_VERIFICATION=true
```

- the file on the JMS-Server should look nearly the same, only with a other MUC_NICKNAME (keep it from installation, it is fine).
- restart the videobridge-service on JVB and you should be good to go!

```
/etc/init.d/jitsi-videobridge2 restart
```

- look into the logs if all is fine. The logs are located under:

```
JVB: /var/log/jitsi/jvb.log
JMS: /var/log/jitsi/jvb.log and most important: /var/log/jitsi/jicofo.log
```

- in jicofo-log you should see the connecting bridges:

```
Jicofo INFORMATION: [30] org.jitsi.jicofo.xmpp.BaseBrewery.processInstanceStatusChanged().329 Added brewery instance: jvb
brewery@internal.auth.<your jitsi-domain>/<your JVB NICKNAME like jvb2>
Jicofo INFORMATION: [30] org.jitsi.jicofo.bridge.BridgeSelector.log() Added videobridge: jvbbrewery@internal.auth.<your jitsi-domain>/<your JVB NICKNAME like jvb2> v: null
```

# Test

- To simply test the installation, shutdown the videobridge on JMS Server and check if you still can connect to JitsiMeet and do a videomeeting. The Jicofo Service will automatically use a available server.

```
/etc/init.d/jitsi-videobridge2 stop
```

- if you checked all, start the videobridge on JMS:

```
/etc/init.d/jitsi-videobridge2 start
```

Your'e done.
