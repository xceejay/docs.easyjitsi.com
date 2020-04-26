---
id: installation
title: Installation of Jitsi Meet
---

This section covers the Installation of Jitsi.

We then install the Java Runtime Environment since Jitsi Meet requires it to run.

Want a quick installation without going through this section? Head [here](https://quickstart.easyjitsi.com)

```bash
apt install -y openjdk-8-jre-headless
```

Having OpenJDK JRE 8 installed, use the following command to verify its installed

```bash
java -version
```

The output should be the following:

```bash
  openjdk version "1.8.0_171"
  OpenJDK Runtime Environment (build 1.8.0_171-8u171-b11-0ubuntu0.18.04.1-b11)
OpenJDK 64-Bit Server VM (build 25.171-b11, mixed mode)
```

The next step is to set `JAVA_HOME` as an environment variable

```bash
echo "JAVA_HOME=$(readlink -f /usr/bin/java | sed "s:bin/java::")" |tee -a /etc/profile
source /etc/profile
```

We install the Nginx webserver in order to serve Jitsi(Optional)

NB: **_Jitsi has a webserver that would automatically serve Jitsi when another webserver(Jetty) is not detected_**.

### Installation of Jitsi Meet on our Ubuntu server

We ensure support is available for apt repositories via HTTPS

```bash
apt-get install apt-transport-https
```

We add the Jitsi repository to our system package sources list:

```bash
cd ~/
wget -qO - https://download.jitsi.org/jitsi-key.gpg.key |apt-key add -
sh -c "echo 'deb https://download.jitsi.org stable/' > /etc/apt/sources.list.d/jitsi-stable.list"
apt update -y
```

We then install Jitsi Meet

```bash
apt install -y jitsi-meet
```

During the installation, when we are asked to provide the hostname of the current installation, we type in the FQDN `jitsimeet.easyjitsi.com` and hit `Enter`

Finally, once we are successful in our installation process, we can check if our Jitsi Meet site is up by heading to our local system and typing in our FQDN `jitsimeet.easyjitsi.com`

Generate a new certificate with Let's encrypt

```bash
/usr/share/jitsi-meet/scripts/install-letsencrypt-cert.sh
```

Default deployments on systems using systemd will have low default values for maximum processes and open files. If the used bridge will expect higher number of participants the default values need to be adjusted (the default values are good for less than 100 participants).
To update the values edit `/etc/systemd/system.conf` and make sure you have the following values:

```
DefaultLimitNOFILE=65000
DefaultLimitNPROC=65000
DefaultTasksMax=65000
```

To load the values and check them look [below](#systemd-details) for details.

### Systemd details

To reload the systemd changes on a running system execute `systemctl daemon-reload` and `service jitsi-videobridge restart`.
To check the tasks part execute `service jitsi-videobridge status` and you should see `Tasks: XX (limit: 65000)`.
To check the files and process part execute `` cat /proc/`cat /var/run/jitsi-videobridge/jitsi-videobridge.pid`/limits `` and you should see:

```
Max processes             65000                65000                processes
Max open files            65000                65000                files
```

**_If you encounted any errors or you found it difficult while following these steps, you can head [here](https://docs.easyjitsi.com/docs/help) to seek help from us._**
