#!/usr/bin/env bash

set -e

git pull && pm2 restart all && pm2 log
