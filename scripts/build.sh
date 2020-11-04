#!/usr/bin/env bash

NODE_ENV=prod next build
NODE_ENV=prod next export
echo 'guide' > out/CNAME
touch out/.nojekyll
