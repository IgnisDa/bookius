#!/bin/bash

DB_NAME="server_db"

if psql -lqt | cut -d \| -f 1 | grep -qw "$DB_NAME"; then
    # $? is 0
    printr --color yellow "Database already exists, skipping creation..."
else
    # $? is 1
    printr --color red "Database does not exist, creating one for you..."
    createdb "$DB_NAME"
    printr --color green "Database created successfully..."
fi
