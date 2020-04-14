---
id:benchmarks 
title: Benchmarks
sidebar_label: Benchmarks 
---

## Performance Evaluation 1

Before we get to a full description of the performance testing of Jitsi Video bridge, let’s first see a representative summary of all results:

We thank [Boris Grozev and Emil Ivov](https://jitsi.org/jitsi-videobridge-performance-evaluation/) for these benchmarks.

Tests were performed on an unmodified Jitsi Meet installation, on a dedicated server. The server is running all the services needed by Jitsi Meet: a web-server (nginx), an XMPP server (prosody) and Jitsi Videobridge. The server machine is equipped with a quad-core Intel ® Xeon® E5-1620 v2 @ 3.70GHz CPU.Let’s first have a look at the testbed

During the tests the following variables once per second where measured:

- Conferences: The number of active conferences.
- Endpoints: The number of total load-generating endpoints in all conferences.
- Cpu_usage: The load of the CPU (all cores) during the last interval. This is the fraction of time spent by the CPU in one of the following states: User, System, Nice, IOWait (this is what is shown on the “%Cpu(s)” line in top(1))
- Network_in: The receiving bitrate, measured by ifstat on (independent) 2-second intervals
- Network_out: The sending bitrate
The following variables are extracted from the above:

Bitrate: The sum of network_in and network_out, converted to Mbps (10^6 bits per second).
Streams: The total number of audio/video stream couples being sent by Jitsi Videobridge. This depends on conferences, endpoints and other considerations (whether there are endpoints which do not send data).
For the test which was ran, a single Jitsi Meet conference with increasing number of endpoints (K). Usage of one instance of Chrome, running the actual Jitsi Meet application and serving as the conference “focus”. This first endpoint had the camera and microphone muted. For the rest of the endpoints (K-1) Jitsi Hammer instances were used, each streaming a pre-recorded audio and video file with a combined average bitrate of about 515 Kbps per endpoint.

## A Sample Test Scenario

One challenge when evaluating Jitsi Videobridge is getting to send enough traffic to actually make it break a sweat. Using browsers to populate enough conferences would likely take hundreds or even thousands of machines so that’s obviously not an option.

What was done instead was to create a conference with a full-star topology where incoming traffic from any and every endpoint is being propagated to every other endpoint connected to Jitsi Videobridge. With this configuration we have K\*(K-1) streams leaving the videobridge (and K-1 arriving).

[<img src="https://desktop.jitsi.org/wiki/pub/jvb-eval-topology.png">](https://jitsi.org/jitsi-videobridge-performance-evaluation/)
Tests were ran with different numbers of load-generating endpoints and K = 10, 15, 20, 25, 29 and 33.

The number of actual video streams increases quadratically with the number of load-generating endpoints, because each of the endpoints also acts as a destination that traffic from everyone else needs to be encrypted and delivered to. Note that in practice one would never want to run a conference that way:

In a conference with hundreds of participants, no one would want to see them all at once. First, this would be hugely inconvenient. You only need to have a look at the screenshot below to see what we mean.

[<img src="https://desktop.jitsi.org/wiki/pub/jvb-eval-bbb.png">](https://jitsi.org/jitsi-videobridge-performance-evaluation/)

Secondly, it would also require users to have ridiculous amounts of download bandwidth. Usually, for large-scale conferences, people would want to use Jitsi Videobridge’s Last N mode so that only the most recent speakers would be distributed and shown.

Once again though, the purpose here is to generate load so stream count and bitrate are the numbers that really matter. Once a specific evaluation was gotten for a given stream count, it wouldn’t matter what number of endpoints they were sent to. In other words, 1000 video streams cost the same amount of CPU and bandwidth, regardless of whether a thousand endpoints were getting one stream or if a hundred endpoints were getting ten each.

## Perfomance Evaluation 2 (Detailed Results)

Now let’s get to the gist. The following graphs show the bitrate, CPU usage and number of video streams (or rather audio/video stream couples) observed during two test that was run.

[<img src="https://desktop.jitsi.org/wiki/pub/jvb-eval-graph1-1000streams.png">](https://jitsi.org/jitsi-videobridge-performance-evaluation/)

In this run thirty-three load generators were used and caused Jitsi Videobridge to distribute 1056 streams (i.e. 1056 video and 1056 audio streams). Bandwidth usage reached over 550Mbps. The CPU usage in the above graph is scaled so that 100% would be at the very top of the Y-axis. We see how the 1056 streams end up taking about 20% CPU.

Calculations of the average bitrate and CPU usage observed during various test intervals with a constant number of load generators and streams. The results are summarized in the following graph. The full details can be found at the end.

[<img src="https://desktop.jitsi.org/wiki/pub/jvb-eval-graph1-bitratevscpu.png">](https://jitsi.org/jitsi-videobridge-performance-evaluation/)
Let’s now see what all of this means exactly.

We see that, as expected, the CPU usage increases nearly linearly with the total bitrate.

Note that even though the tests used a single conference, it had 1056 video (and also 1056 audio streams going out of the videobridge. This generates a bitrate roughly equivalent to 528 one-to-one conferences, 176 3-person conferences or 53 conferences with 5 people.

While the memory consumption wasn't specifically shown during these tests, it is worth noting that that Java virtual machine was always run with a 3GB memory limit, and it never exceeded this. In fact, during the tests, the RSS of the Jitsi Videobridge process as reported by ps()1) never exceeded 1500MB.

These results show that Jitsi Videobridge is able to handle a substantial bitrate with relatively low usage of resources, and that it scales extremely well with the bitrate/number of streams.

More graphs for those that really want a deep look

[<img src="https://desktop.jitsi.org/wiki/pub/jvb-eval-graph3-gradual.png">](https://jitsi.org/jitsi-videobridge-performance-evaluation/)

## Averages

The next graphs zoom in on the intervals used to calculate the averages (during the periods where the number of endpoints/streams stays the same). We can see that the CPU usage stays very stable in these periods.

[<img src="https://desktop.jitsi.org/wiki/pub/jvb-eval-graph-interval1.png">](https://jitsi.org/jitsi-videobridge-performance-evaluation/) [<img src="https://desktop.jitsi.org/wiki/pub/jvb-eval-graph-interval2.png">](https://jitsi.org/jitsi-videobridge-performance-evaluation/)
[<img src="https://desktop.jitsi.org/wiki/pub/jvb-eval-graph-interval3.png">](https://jitsi.org/jitsi-videobridge-performance-evaluation/)
[<img src="https://desktop.jitsi.org/wiki/pub/jvb-eval-graph-interval4.png">](https://jitsi.org/jitsi-videobridge-performance-evaluation/) [<img src="https://desktop.jitsi.org/wiki/pub/jvb-eval-graph-interval5.png">](https://jitsi.org/jitsi-videobridge-performance-evaluation/)

## Jitsi vs Zoom

Here is a video of a quick side-by-side comparison of Zoom(WebRTC) vs Jitsi performance in an environment with simulated congestion

<iframe width="800" height="500" src="http://www.youtube.com/embed/WFil-ZPE0-g" frameborder="0" allowfullscreen></iframe>

Detailed results can be found [here](https://jitsi.org/news/a-simple-congestion-test-for-zoom/).
