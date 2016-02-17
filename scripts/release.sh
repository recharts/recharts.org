#!/bin/bash -e
if ! [ -e scripts/release.sh ]; then
  echo >&2 "Please run scripts/release.sh from the repo root"
  exit 1
fi

git checkout master

npm run build

git checkout gh-pages

git pull origin gh-pages --rebase

mv -f build/* .

git commit -am "build"

# push first to make sure we're up-to-date
git push origin master

git checkout master
