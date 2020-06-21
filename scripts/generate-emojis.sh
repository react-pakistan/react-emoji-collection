rm ./src/activities/*.*
find . -name '.DS_Store' -type f -delete

scripts/all-scripts.sh
node scripts/generate-emojis.js
