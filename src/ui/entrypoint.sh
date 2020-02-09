#!/usr/bin/env bash

cd /srv/src/ui/

npm install
while true; do
    npm start
    sleep 5
done

