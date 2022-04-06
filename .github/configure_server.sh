#!/bin/bash

mkdir -p $HOME/.config/komutracker/aw-server

# Configure CORS
# FIXME: Why is this not needed for aw-server-rust?
# FIXME: Ideally this should only need to contain the cors_origins keys, with fallback to defaults
cat > $HOME/.config/komutracker/aw-server/aw-server.toml <<- EOM
[server]
#host = "localhost"
#port = "5600"
#storage = "peewee"
cors_origins = "http://localhost:27180"

[server-testing]
#host = "localhost"
#port = "5666"
#storage = "peewee"
cors_origins = "http://localhost:27180"
EOM
