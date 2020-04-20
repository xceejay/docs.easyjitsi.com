---
id: scaling
title: Scaling Jitsi
---

# Scalable Jitsi installation

A single server Jitsi installation is good for a limited size of concurrent conferences.
The first limiting factor is the videobridge component, that handles the actual video and audio traffic.
It is easy to scale the video bridges horizontally by adding as many as needed.
In a cloud based environment, additionally the bridges can be scaled up or down as needed.

_NB_: The [Youtube Tutorial on Scaling](https://www.youtube.com/watch?v=LyGV4uW8km8) is outdated and describes an old configuration method.

## Architecture (Single Jitsi-Meet, multiple videobridges)

A first step is to split the functions of the central jitsi-meet instance (with nginx, prosody and jicofo) and videobridges.

A simplified diagram (with open network ports) of an installation with one Jitsi-Meet instance and three
videobridges that are load balanced looks as follows. Each box is a server/VM.

<img src="/img/arch.png"></img>

## Machine Sizing

The Jitsi-Meet server will generally not have that much load (unless you have many) conferences
going at the same time. A 4 CPU, 8 GB machine will probably be fine.

The videobridges will have more load. 4 or 8 CPU with 8 GB RAM seems to be a good configuration.

See how to install it in the next [page](loadbalancing)

