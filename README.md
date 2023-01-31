# NJS-Webping

[![Build](https://github.com/ChokunPlayZ/njs-webping/actions/workflows/release.yml/badge.svg)](https://github.com/ChokunPlayZ/njs-webping/actions/workflows/release.yml)

this is a simple nodejs script that will ping a website at a interval

you can adopt this to use as a alterative for cornjob or whatever is your previous solution

# Usage

```sh
docker run -d \
  --name=WebPing \
  -e TZ=Europe/London `# Set this to your timezone` \
  -e ENABLE_LOG=FALSE `# Response Time Logging (default: FALSE)` \
  -e URL=https://example.com/ `# Set this to the url you want to ping` \
  -e DELAY=30000 `# Delay Between Request in miliseconds if left blank will default to 1m` \
  -e METHOD=GET `# HTTP Method that is used to ping the site, if not provided will deault to "HEAD"` \
  --restart unless-stopped \
  chokunplayz/njs-webping:stable
```

# การใช้งาน

```sh
docker run -d \
  --name=WebPing \
  -e TZ=Asia/Bangkok \
  -e ENABLE_LOG=FALSE `# Response Time Logging (default: FALSE)` \
  -e URL=https://example.com/ `# Set this to the url you want to ping` \
  -e DELAY=30000 `# ระยะเวลาระหว่าง request (ms)` \
  -e METHOD=GET `# HTTP Method ที่ต้องการใช้ ถ้าไม่มีค่านี้ จะตั้งเป็น HEAD อัตโนมัติ`\
  --restart unless-stopped \
  chokunplayz/njs-webping:stable
```