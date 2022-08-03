# `tmpstops.json` generator

This crappy node.js script helps generating JSON data from [Truckers MP's spread sheets](https://docs.google.com/spreadsheets/d/12o5Bpx7zB2Atn_v4YuCvlDZ8n6dn08IyfjnxqMvQEAY/edit#gid=0).

You must create your own service account and download JSON file and rename to `credntials.json` in [Google Cloud](https://console.cloud.google.com/).
And ensure these API service enabled:

* Sheets API

When all set, run `npm start`, it generated `tmpstops.json` file.

## Known incorrect data from TMP's sheets (update at 2022-07-24)

* Kotka is a Finland city which featured in "Beyond the Baltic Sea", but the sheets [assigned](https://docs.google.com/spreadsheets/d/12o5Bpx7zB2Atn_v4YuCvlDZ8n6dn08IyfjnxqMvQEAY/edit#gid=0&range=A10:E10) as "Going East".
