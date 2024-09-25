#!/bin/bash

export DOCKER_IMAGE=healthdata.azurecr.io/compasscoach-backend:latest
export DB_TYPE=postgres
export DB_HOST=postgres.supabase.svc.cluster.local
export DB_PORT=5432
export DB_USER=postgres
export DB_PASSWORD=postgres
export DB_NAME=postgres
export DB_SSL=false
export SERVICE_PORT=3000
export DNS_NAME=compasscoach.local


# Directory containing the files
DIRECTORY="."

# Loop through all files in the directory
for file in "$DIRECTORY"/*; do
    if [ -f "$file" ]; then
        # Use envsubst to replace environment variables and overwrite the file
        envsubst < "$file" > "${file}.tmp" && mv "${file}.tmp" "$file"
        echo "Processed $file"
    fi
done