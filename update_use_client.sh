#!/bin/bash

#!/bin/bash

find src -name "*.tsx" | while read file; do
    if ! grep -q "^'use client';" "$file"; then
        echo "'use client';" | cat - "$file" > temp && mv temp "$file"
        echo "Added 'use client' to $file"
    fi
done