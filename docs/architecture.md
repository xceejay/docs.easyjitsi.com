---
id:architecture 
title: Architecture of Jitsi
sidebar_label: Architecture of Jitsi
---

The overall Jitsi architecture has a great level of complexity and abstract. We can simply it with first step of splitting the functions of the central jitsi-meet instance (with nginx, prosody and jicofo) and videobridges.

Short Descriptions on Parts of the Jitsi Architecture

- Nginx: This is a web server which can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.
- Jitsi Meet: This is a is stand alone application of the Jitsi Architecture which handles secure, simple and scalable Video Conferences for the end user.
- Prosody: This component is a modern [XMPP](https://en.wikipedia.org/wiki/XMPP) communication server.
- Jicofo: Jicofo is a server side signalling [focus](https://xmpp.org/extensions/xep-0340.html) component used in Jitsi Meet Conferences. It is responsible for managing media sessions between each of the participants and the videobridge.
- Jitsi-Videobridge: This is a [multiuser](https://xmpp.org/extensions/xep-0045.html) video [XMPP](https://en.wikipedia.org/wiki/XMPP) server component.It is also a WebRTC compatible video router or SFU that lets build highly scalable video conferencing infrastructure (i.e., up to hundreds of conferences per server).

## TO DO - WAITING FOR IMAGES
