#!/bin/bash -e

if ! [ -e scripts/release.sh ]; then
  echo >&2 "Please run scripts/release.sh from the repo root"
  exit 1
fi

git checkout master

GIT_STATUS=`git status | grep -e 'nothing to commit'`

if [ -z "$GIT_STATUS" ]; then
  echo "Please commit the master firstly"
  exit 1
fi

npm run build

git checkout gh-pages

git pull --rebase origin gh-pages

mv -f build/* .

git commit -am "build"

git push origin gh-pages

git checkout master

git pull --rebase origin master

git push origin master
