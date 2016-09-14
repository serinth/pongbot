#!/bin/bash

rm cam.jpg
raspistill -vf -hf -w 500 -h 500 -o cam.jpg
