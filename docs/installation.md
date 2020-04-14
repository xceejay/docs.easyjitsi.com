---
id:installation 
title: Installation of Jitsi
sidebar_label: Installation of Jitsi
---

This section covers the Installation of Jitsi.

We then install the Java Runtime Environment since Jitsi Meet requires it to run.

```bash
sudo apt install -y openjdk-8-jre-headless
```

Having OpenJDK JRE 8 installed, use the following command to verify its installed

```bash
java -version
```

The output should be the following

```bash
openjdk version "1.8.0_171"
OpenJDK Runtime Environment (build 1.8.0_171-8u171-b11-0ubuntu0.18.04.1-b11)
OpenJDK 64-Bit Server VM (build 25.171-b11, mixed mode)
```
