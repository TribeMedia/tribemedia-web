#!/bin/bash

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
