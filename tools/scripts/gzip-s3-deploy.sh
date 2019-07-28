#!/bin/bash
echo hello
pwd
#TODO: parametrize script


# compress all css, html, and js files in dist, removed -o -name '*.html'
find ./dist/apps/rekt-league-ui/ \( -name '*.css' -o -name '*.js' \) -exec gzip --verbose --keep --best --force {} \;

# rename gzipped files to original names
for f in ./dist/apps/rekt-league-ui/*.gz; do
    echo compressed file "$f"
    echo removing .gz from file name
    mv -- "$f" "${f%.gz}"
done

#upload to aws tagged with correct metadata
# aws s3 sync dist/apps/rekt-league-ui s3://www.rektleague.com --delete --acl public-read
aws s3 sync ./dist/apps/rekt-league-ui s3://www.rektleague.com \
--exclude "*" \
--include "assets/*.png" --acl "public-read" --cache-control no-cache \
--include "*.html" --acl "public-read" --cache-control no-cache \
--include "assets/img/*.svg" --acl "public-read" --cache-control no-cache \
--include "*.txt" --acl "public-read" --cache-control no-cache \
--delete \

# couldnt compress index.html without issues :'(
aws s3 sync ./dist/apps/rekt-league-ui s3://www.rektleague.com \
--exclude "*" \
--include "*.js" --acl "public-read" --cache-control  no-cache --content-encoding gzip \
--include "*.css" --acl "public-read" --cache-control no-cache --content-encoding gzip \
--delete
