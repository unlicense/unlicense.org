# Contribution guide

## How to
If you'd like to modify the contents of the page, you can edit `README.md` directly, if you'd rather change the presentation, modify `docs/pandoc.css`.

After applying your modifications, you can build the website following the instructions in the **Build** section.

## Build
1. [Install pandoc](https://pandoc.org/installing.html)
2. Run `pandoc -t html --css "pandoc.css" -s -M title="Unlicense Yourself: Set Your Code Free" -V title:"" README.md -o docs/index.html -V header-includes:"<link rel='shortcut icon' href='favicon.png' />"`
