#!/bin/bash

# Build the application
echo "Building the application..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "Build successful!"
    
    # For local testing
    if [ "$1" = "local" ]; then
        echo "Starting local server..."
        npx serve out --single --listen 3000
    else
        echo "Build complete. Ready for deployment!"
        echo "Files are in the 'out' directory."
        echo "For GitHub Pages deployment, push to main branch."
        echo "For custom domain (optimal-ai.info), configure DNS and GitHub Pages settings."
    fi
else
    echo "Build failed!"
    exit 1
fi 