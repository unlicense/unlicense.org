#!/usr/bin/env sh
set -ev
pandoc -t html --css "pandoc.css" -s -M title="Unlicense Yourself: Set Your Code Free" -V title:"" README.md -o static/index.html -V header-includes:"<link rel='shortcut icon' href='favicon.png' />" --fail-if-warnings
