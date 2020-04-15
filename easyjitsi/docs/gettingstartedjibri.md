---
id: gettingstartedjibri
title: Starting Out With Jibri
---

In order to record conferences the following are required;

## Prerequisites

- An Ubuntu 18.04 LTS x64 server with an [IPv4 address](https://en.wikipedia.org/wiki/IPv4).

### Ubuntu Server Specific Prerequisites

- A `root` user
- A sub domain **recorder.easyjitsi.com** being pointed to the server mentioned above.

NB: **_Our example server will be using 8GB of RAM_**

## Setting Up The Server

On our local system, we login into our Ubuntu server

```bash
ssh root@recorder.easyjitsi.com -p 22
```

We then run the following command to setup a hostname, recorder, and an FQDN, recorder.easyjitsi.com, for the machine:

```bash
 hostnamectl set-hostname recorder
 sed -i 's/^127.0.1.1.*$/127.0.1.1 recorder.example.com recorder/g' /etc/hosts
```

To verify it was set properly we run these commands

```bash
hostname
hostname -f
```

**_If you encounted any errors or you found it difficult while following these steps, you can head [here](https://docs.easyjitsi.com/docs/help) to seek help from us._**
