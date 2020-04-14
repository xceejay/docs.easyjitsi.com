---
id:gettingstarted 
title: Getting Started
sidebar_label: Getting Started
---

In this section [Easy Jitsi](easyjitsi.com) will guide you through the process of setting up an Ubuntu 18.04 LTS server for Jitsi Meet.

## Prerequisites

- An Ubuntu 18.04 LTS x64 server with an [IPv4 address](https://en.wikipedia.org/wiki/IPv4).
- [Openssh](https://www.openssh.com/)
- A domain name for your server(The example domain we're going to be using is **easyjitsi.com**)

### Ubuntu Server Specific Prerequisites

- A [root]("https://geek-university.com/linux/root-account/") user
- A sub domain **jitsimeet.easyjitsi.com** being pointed to the server mentioned above.

NB: **_Our example server will be using 2GB of RAM_**

On our local system, we login into our Ubuntu server

```bash
ssh root@jitsimeet.easyjitsi.com -p 22
```

Since our machine has 2GB of memory, it's recommended to setup a 2GB (2048M) swap partition in order to improve system performance. For more information about recommended swap sizes depending on ram size visit [here](https://askubuntu.com/questions/49109/i-have-16gb-ram-do-i-need-32gb-swap)

We configure our swap partition

```bash
dd if=/dev/zero of=/swapfile count=2048 bs=1M
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
echo '/swapfile noneswapsw0 0' |tee -a /etc/fstab
free -m
```

We setup a hostname and a [FQDN](https://en.wikipedia.org/wiki/Fully_qualified_domain_name) for the machine before we can enable HTTPS security by deploying a Let's Encrypt HTTPS certificate.

We then run the following command to setup a hostname, jitsimeet, and an FQDN, jitsimeet.easyjitsi.com, for the machine:

```bash
 hostnamectl set-hostname jitsimeet
 sed -i 's/^127.0.1.1.*$/127.0.1.1 jitsimeet.example.com jitsimeet/g' /etc/hosts
```

To verify it was set properly we run these commands

```bash
hostname
hostname -f
```

We then ensure the firewall is allowed for OpenSSH, HTTP, and HTTPS traffic, along with inbound UDP traffic on port 10000 through port 20000:

We do that by running the following commands:

```bash
 ufw allow OpenSSH
 ufw allow http
 ufw allow https
 ufw allow in 10000:20000/udp
 ufw enable
```

We Update and updgrade our packages and Reboot our server

NB: **_This will log us out of the Ubuntu server: We wait for a few seconds and login into the server again._**

```bash
apt update
apt upgrade -y &&shutdown -r now
```

