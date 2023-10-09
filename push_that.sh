#!/bin/bash
# Check message
if [ $# -eq 0 ]; then
    echo "Pas de message"
    exit 1
fi

# Take the commit message
message="$@"

# Git add and pass message to git commit
git add -A && git commit -m "$message"

# Push to the current repository 
git push origin

# Check push state
if [ $? -eq 0 ]; then
    echo "Success push"
else
    echo "Push failed"
    exit 1
fi

