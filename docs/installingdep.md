---
id:installingdep 
title: Installing Necessary Dependencies
sidebar_label: Installing Necessary Dependencies
---

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-163579416-2"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-163579416-2');
</script>

**NB:We need a separate server with the FQDN recorder.easyjitsi.com in order to record conferences**

In order to record Jitsi Video Conferences, we do the following:

Install Extra Linux Kernel Modules That Jibri Dependencies On

```bash
apt update
apt install linux-image-extra-virtual
```

Load The ALSA loopback module into the kernel

```bash
echo "snd-aloop">>/etc/modules
modprobe snd-aloop
```

Install FFMPEG

```bash
apt install ffmpeg
```

Install The Latest Google Chrome stable & Chromedriver

```bash
## Chrome
curl -sS -o - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add
echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google-chrome.list
apt-get -y update
apt-get -y install google-chrome-stable

## To hide chrome warnings
mkdir -p /etc/opt/chrome/policies/managed
echo '{ "CommandLineFlagSecurityWarningsEnabled": false }' >>/etc/opt/chrome/policies/managed/managed_policies.json

## We may need unzip to decompress the file
apt install unzip


## Chrome Driver
CHROME_DRIVER_VERSION=`curl -sS chromedriver.storage.googleapis.com/LATEST_RELEASE`
wget -N http://chromedriver.storage.googleapis.com/$CHROME_DRIVER_VERSION/chromedriver_linux64.zip -P ~/
unzip ~/chromedriver_linux64.zip -d ~/
rm ~/chromedriver_linux64.zip
mv -f ~/chromedriver /usr/local/bin/chromedriver
chown root:root /usr/local/bin/chromedriver
chmod 0755 /usr/local/bin/chromedriver
```

Install Necessary Programs

```bash
apt-get install openjdk-8-jdk ffmpeg curl alsa-utils icewm xdotool
apt install xserver-xorg-input-void xserver-xorg-video-dummy
```

Install Jibri

```bash
wget -qO - https://download.jitsi.org/jitsi-key.gpg.key |  apt-key add -
sh -c "echo 'deb https://download.jitsi.org stable/' > /etc/apt/sources.list.d/jitsi-stable.list"
apt-get update
apt-get install jibri
```

Add Jibri To Necessary Groups

```bash
sudo usermod -aG adm,audio,video,plugdev jibri
```

**_If you encounted any errors or you found it difficult while following these steps, you can head [here](https://docs.easyjitsi.com/docs/help) to seek help from us._**
