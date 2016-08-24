# Quick Reference
username: pi
password: On the general channel topic on Slack
Slack: pongbot.slack.com

## Pi Info
Raspberry Pi 3 running Raspian Linux
Camera Module NOIR v2
Node Version Manager with Node.js installed
Python 2.7
OpenCV 2.4.9

# SSH
`ssh pi@ipaddress`

To get a file over SCP if you're remoting in:
`scp pi@ipaddres:/path/to/image.jpg /local/path/image.jpg`

# Existing Code
`cd ~/pongbot/pibot`

The serverless code and the code to run on the pi is available at this GitHub repo:
`git clone https://github.com/serinth/pongbot`

## Get a image/video from the camera
Raspbian has a built in quick access to get to the camera module. To capture an image just run:
`raspistill -o image.jpg`

If the image is flipped around we can do:
`raspistill -vf -hf -o image.jpg`

Using OpenCV code in `/pongbot/pibot/`
`python test_image.py`

To get a video stream:
`python test_video.py`

# Serverless Code

The top level of this structure is using [serverless framework](http://serverless.com/). Install using `npm install -g serverless@beta`.
The bot will be attached as a custom command integration on the Slack channel.

# Develop Locally

Create all vision programs using the same python version and OpenCV version as the Pi. 
The only thing that you will need to change is the camera initialization function from your webcam to the `PiCamera` python class.
See the `track.py` for examples.

# AWS IoT

A certificate will be installed on the Pi in `~/certs` to talk to IoT.